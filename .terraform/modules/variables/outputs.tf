output "project_name" {
  value = var.project_name
}

output "environment" {
  value = var.environment
}

output "project_name_env" {
  value = "${var.project_name}-${var.environment}"
}

output "region" {
  value = lookup(var.region, var.environment)
}

output "instance_type" {
  value = lookup(var.instance_type, var.environment)
}

output "swap_size" {
  value = lookup(var.swap_size, lookup(var.instance_type, var.environment))
}

output "task_cpu" {
  value = lookup(var.task_cpu, lookup(var.instance_type, var.environment))
}

output "task_memory" {
  value = lookup(var.task_memory, lookup(var.instance_type, var.environment))
}

output "min_task_count" {
  value = lookup(var.min_task_count, var.environment)
}

output "max_task_count" {
  value = lookup(var.max_task_count, var.environment)
}

output "deployment_minimum_healthy_percent" {
  value = lookup(var.max_task_count, var.environment) <= 1 ? 0 : 100 / lookup(var.max_task_count, var.environment)
}

output "deployment_maximum_percent" {
  value = lookup(var.deployment_maximum_percent, var.environment)
}

output "log_retention_in_days" {
  value = lookup(var.log_retention_in_days, var.environment)
}

output "vpc_id" {
  value = lookup(var.vpc_id, var.environment)
}

output "public_subnet_ids" {
  value = lookup(var.public_subnet_ids, var.environment)
}
