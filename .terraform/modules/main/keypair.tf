resource "aws_key_pair" "this" {
  key_name   = var.project_name_env
  public_key = file("${path.module}/ssh_keys/${var.project_name_env}.pub")
}
