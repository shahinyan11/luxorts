resource "aws_lb" "this" {
  name                       = module.variables.project_name_env
  subnets                    = module.global.public_subnet_ids
  load_balancer_type         = "application"
  security_groups            = [aws_security_group.load_balancer.id]
  enable_deletion_protection = true
}

resource "aws_lb_target_group" "this" {
  name                 = aws_lb.this.name
  port                 = "8080"
  protocol             = "HTTP"
  vpc_id               = module.global.vpc_id
  deregistration_delay = 30

  health_check {
    path                = "/login"
    port                = "80"
    protocol            = "HTTP"
    timeout             = 20
    interval            = 60
    unhealthy_threshold = 2
    healthy_threshold   = 2
    matcher             = "200"
  }

  stickiness {
    type    = "lb_cookie"
    enabled = true
  }
}

resource "aws_alb_listener" "this" {
  load_balancer_arn = aws_lb.this.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "arn:aws:acm:us-east-2:529322395451:certificate/9c2fa49a-1a69-40c7-90a3-a41a91f8043a"


  default_action {
    target_group_arn = aws_lb_target_group.this.arn
    type             = "forward"
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.this.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "redirect"
    target_group_arn = aws_lb_target_group.this.arn
    redirect {
      host        = "#{host}"
      path        = "/#{path}"
      port        = "443"
      protocol    = "HTTPS"
      query       = "#{query}"
      status_code = "HTTP_301"
    }
  }
}
