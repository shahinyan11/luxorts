
data "aws_iam_policy_document" "ecs_task_role" {
  statement {
    effect    = "Allow"
    resources = ["*"]

    actions = [
        "ssmmessages:CreateControlChannel",
        "ssmmessages:CreateDataChannel",
        "ssmmessages:OpenControlChannel",
        "ssmmessages:OpenDataChannel"
    ]
  }
}

data "aws_iam_policy_document" "assume_role_ecs_tasks" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_task_role" {
  name               = "${module.variables.project_name_env}-ecs-task-role"
  assume_role_policy = data.aws_iam_policy_document.assume_role_ecs_tasks.json
}

resource "aws_iam_role" "ecs_execution_role" {
  name               = "${module.variables.project_name_env}-ecs-execution-role"
  assume_role_policy = data.aws_iam_policy_document.assume_role_ecs_tasks.json
}

resource "aws_iam_role_policy" "ecs_execution_role_policy" {
  name   = "${module.variables.project_name_env}-ecs-execution-role-policy"
  policy = data.aws_iam_policy_document.ecs_execution_role_policy.json
  role   = aws_iam_role.ecs_execution_role.id
}

data "aws_iam_policy_document" "ecs_execution_role_policy" {
  statement {
    effect    = "Allow"
    resources = ["*"]

    actions = [
      "ecr:GetAuthorizationToken",
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
  }

  statement {
    effect    = "Allow"
    resources = ["*"]

    actions = [
      "ssm:GetParameterHistory",
      "ssm:GetParametersByPath",
      "ssm:GetParameters",
      "ssm:GetParameter"
    ]
  }
}

resource "aws_iam_role_policy" "ecs_task_policy" {
  name   = "${module.variables.project_name_env}-ecs-task-role-policy"
  policy = data.aws_iam_policy_document.ecs_task_role.json
  role   = aws_iam_role.ecs_task_role.id
}
