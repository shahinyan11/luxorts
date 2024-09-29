# Backend can't use variables, values have to be hardcoded

terraform {
  backend "s3" {
    bucket  = "luxort-terraform-states"
    region  = "us-east-2"
    key     = "luxort-frontend-prototype/terraform.tfstate"
    encrypt = true
  }
}
