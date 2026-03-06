terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}
resource "aws_dynamodb_table" "jobs_table" {
  name         = "auroralite-jobs"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "job_id"

  attribute {
    name = "job_id"
    type = "S"
  }

  tags = {
    Project = "AuroraLite"
  }
}
resource "aws_sqs_queue" "job_queue" {
  name = "auroralite-job-queue"

  visibility_timeout_seconds = 30
  message_retention_seconds  = 86400

  tags = {
    Project = "AuroraLite"
  }
}