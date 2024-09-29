output "ecs_instance_iam_instance_profile" {
  value = aws_iam_instance_profile.ecs_instance
}

output "ecs_instance_iam_role" {
  value = aws_iam_role.ecs_instance
}

output "vpc_id" {
  value = var.vpc_id
}

output "public_subnet_ids" {
  value = var.public_subnet_ids
}
