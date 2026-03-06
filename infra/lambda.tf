resource "aws_lambda_function" "job_worker" {
  function_name = "auroralite-job-worker"
  runtime       = "python3.9"
  handler       = "handler.handler"

  filename         = "../services/job_worker/worker.zip"
  source_code_hash = filebase64sha256("../services/job_worker/worker.zip")

  role = aws_iam_role.lambda_role.arn
}
resource "aws_iam_role" "lambda_role" {
  name = "auroralite-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}
resource "aws_lambda_permission" "allow_sqs" {
  statement_id  = "AllowExecutionFromSQS"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.job_worker.function_name
  principal     = "sqs.amazonaws.com"
  source_arn    = aws_sqs_queue.job_queue.arn
}
resource "aws_lambda_event_source_mapping" "sqs_trigger" {
  event_source_arn = aws_sqs_queue.job_queue.arn
  function_name    = aws_lambda_function.job_worker.arn
  batch_size       = 1
}