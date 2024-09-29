# Task definition

data "template_file" "container_definitions" {
  template = file("${path.module}/templates/container_definitions.json")

  vars = {
    environment = module.variables.environment

    web_server_ecr_repo = module.main.ecr_repositories.web_server.repository_url
    app_ecr_repo        = module.main.ecr_repositories.app.repository_url

    log_group  = module.main.aws_cloudwatch_log_group.name
    log_region = module.variables.region
  }
}

resource "aws_ecs_task_definition" "this" {
  family       = module.variables.project_name_env
  network_mode = "awsvpc"
  cpu          = 512 # module.variables.task_cpu
  memory       = 1024 # module.variables.task_memory

  execution_role_arn = aws_iam_role.ecs_execution_role.arn
  container_definitions = data.template_file.container_definitions.rendered
  requires_compatibilities = ["FARGATE"]
  task_role_arn = aws_iam_role.ecs_task_role.arn

  volume {
    name = "static"
  }
}

# Service

resource "aws_ecs_service" "this" {
  name                               = module.variables.project_name_env
  cluster                            = module.ecs_cluster.cluster.id
  task_definition                    = aws_ecs_task_definition.this.arn
  launch_type                        = "FARGATE"
  desired_count                      = module.variables.min_task_count
  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200
  enable_execute_command = true

  network_configuration {
    subnets = module.variables.public_subnet_ids
    security_groups = [aws_security_group.cluster_instance.id]
    assign_public_ip = true
  }

  load_balancer {
    container_name   = "web-server"
    container_port   = 8080
    target_group_arn = aws_lb_target_group.this.arn
  }

  depends_on = [
    module.global.ecs_instance_iam_role
  ]

  lifecycle {
    ignore_changes = [desired_count]
  }
}
