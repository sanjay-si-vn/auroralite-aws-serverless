# AuroraLite – Serverless Task Management App

## 1. Overview
AuroraLite is a full-stack serverless task management application that allows users to securely manage tasks using AWS cloud services.

---

## 2. Tech Stack

- AWS Lambda  
- API Gateway  
- DynamoDB  
- Amazon Cognito (Authentication & JWT)  
- HTML, CSS, JavaScript (Frontend)  
- Node.js  

---

## 3. Features

- Secure login using Cognito  
- Create tasks  
- Retrieve tasks  
- Update tasks  
- Delete tasks  
- Search tasks (Frontend)  
- Mark tasks as completed (UI)  
- Fully serverless architecture  

---

## 4. API Endpoints

POST  
https://k8rio9ihn9.execute-api.ap-south-1.amazonaws.com/dev/tasks  

GET  
https://k8rio9ihn9.execute-api.ap-south-1.amazonaws.com/dev/tasks  

PUT  
https://k8rio9ihn9.execute-api.ap-south-1.amazonaws.com/dev/tasks/{id}  

DELETE  
https://k8rio9ihn9.execute-api.ap-south-1.amazonaws.com/dev/tasks/{id}  

---

## 5. Architecture

Frontend → API Gateway → Lambda → DynamoDB  
Authentication handled via Cognito (JWT Authorizer)

---

## 6. How It Works

1. User logs in using Cognito  
2. Receives JWT token  
3. Token is sent in API requests  
4. API Gateway validates token  
5. Lambda executes business logic  
6. DynamoDB stores/retrieves data  
7. Response returned to frontend  

---

## 7. Project Structure

- index.html → Frontend UI  
- Lambda functions → Backend logic  
- DynamoDB → Task storage  

---

## 8. Future Improvements

- Persist completed status in DB  
- Role-based access control  
- Better UI/UX  
- Deploy frontend (S3 + CloudFront)

---

## 9. Screenshot

<img width="1668" height="864" alt="image" src="https://github.com/user-attachments/assets/a7327fb3-03d1-4f3f-bc22-f34ccf65c234" />
