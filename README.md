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
<img width="1536" height="1024" alt="aws1" src="https://github.com/user-attachments/assets/ebe440c6-3494-4b2a-bd2a-584839703ead" />
<img width="1668" height="864" alt="Screenshot 2026-04-28 112736" src="https://github.com/user-attachments/assets/58ce1930-f24d-43eb-a1c7-89c5dbf24a10" />


