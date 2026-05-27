# API Contract - AI Study Hub

## Base URL

```text
http://localhost:8080
Common Response Format
Success
{
  "success": true,
  "message": "Action completed successfully",
  "data": {}
}
Error
{
  "success": false,
  "message": "Error message",
  "data": null
}
1. Health Check API
GET /api/health

Used to check whether the backend server is running.

Success Response
{
  "success": true,
  "message": "AI Study Hub backend is running",
  "data": {
    "status": "UP"
  }
}
2. Register API
POST /api/auth/register
Request Body
{
  "fullName": "Nguyen Van A",
  "email": "user@test.com",
  "password": "12345678"
}
Success Response
{
  "success": true,
  "message": "Register successfully",
  "data": {
    "userId": 1,
    "fullName": "Nguyen Van A",
    "email": "user@test.com",
    "role": "USER"
  }
}
3. Login API
POST /api/auth/login
Request Body
{
  "email": "user@test.com",
  "password": "12345678"
}
Success Response
{
  "success": true,
  "message": "Login successfully",
  "data": {
    "userId": 1,
    "fullName": "Nguyen Van A",
    "email": "user@test.com",
    "role": "USER",
    "token": "sample-token"
  }
}