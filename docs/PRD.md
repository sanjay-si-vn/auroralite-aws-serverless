## AuroraLite – Product Requirement Document (PRD)

## 1. Project Overview

AuroraLite is a serverless cloud platform built on AWS that allows users to submit jobs through an API and process them asynchronously using event-driven architecture.

The system is designed to demonstrate scalable, production-style cloud architecture using AWS serverless services.

The main goal of AuroraLite is to process incoming requests efficiently while maintaining zero infrastructure management.

## 2. Objectives

• Build a fully serverless backend on AWS  
• Process tasks asynchronously using events  
• Demonstrate scalable cloud architecture  
• Use infrastructure-as-code for deployment  
• Maintain extremely low operational cost

## 3. Key Features

• REST API for job submission  
• Event-driven job processing  
• Serverless compute using AWS Lambda  
• Persistent storage for job data  
• Monitoring and logging for operations

## 4. Target Architecture

AuroraLite will use the following AWS services:

• API Gateway – public API interface  
• AWS Lambda – serverless compute  
• DynamoDB – job storage  
• EventBridge / SQS – event processing  
• CloudWatch – logging and monitoring

## 5. Success Criteria

The project will be considered successful if:

• Users can submit jobs through an API  
• Jobs are processed asynchronously  
• System scales automatically  
• Logs and monitoring are available