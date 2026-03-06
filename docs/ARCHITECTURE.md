# AuroraLite – System Architecture

## Overview

AuroraLite is designed as a fully serverless, event-driven architecture on AWS.  
The system accepts API requests, stores job data, and processes the jobs asynchronously.

The architecture ensures scalability, reliability, and minimal operational cost.

---

## High Level Flow

1. Client sends request to API
2. API Gateway receives the request
3. Lambda function processes the request
4. Job data is stored in DynamoDB
5. Event is sent to a queue
6. Worker Lambda processes the job
7. Logs and metrics are recorded in CloudWatch

## AWS Services Used

### API Gateway
Handles incoming HTTP requests and routes them to Lambda functions.

### AWS Lambda
Runs the backend logic for:
- job submission
- job processing

### DynamoDB
Stores job data such as:
- job_id
- status
- payload
- timestamp

### Amazon SQS
Acts as a message queue for asynchronous job processing.

### CloudWatch
Provides logging and monitoring for the entire system.


## Architecture Goals

• Fully serverless infrastructure  
• Highly scalable architecture  
• Event-driven processing  
• Low operational cost  
• Fault-tolerant design