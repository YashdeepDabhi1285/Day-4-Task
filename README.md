# **NestJS User Management API**

## **📌 Project Overview**
This **NestJS-powered CRUD API** offers a well-structured and efficient approach to managing user data. It provides functionalities to **Create, Read, Update, and Delete (CRUD)** users while adhering to a modular design for better scalability and maintainability. By separating **controllers, services, and DTOs**, the project ensures clean code, easy debugging, and seamless expansion.

---

## **⚙️ Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone <repository-url>
cd Day-4-Task
```
### **2️⃣ Install Dependencies**
```sh
npm install
```
### **3️⃣ Start the Application**
```sh
npm run start:dev
```
The API server will be available at **http://localhost:3000**

### **4️⃣ API Testing with Postman**
Import the provided Postman collection: `Day-4 Task(users).postman_collection.json`
Use Postman to send requests and validate API functionality.

---

## **🚀 API Endpoints & Usage**

### **1️⃣ Create a New User**
**Endpoint:** `POST /users`

**Request Body:**
```json
{
  "name": "Alice Brown",
  "email": "alice@example.com"
}
```

**Response:**
```json
{
  "id": "1710679005678",
  "name": "Alice Brown",
  "email": "alice@example.com"
}
```

### **2️⃣ Retrieve All Users**
**Endpoint:** `GET /users`

**Response:**
```json
[
  {
    "id": "1710679005678",
    "name": "Alice Brown",
    "email": "alice@example.com"
  }
]
```

### **3️⃣ Update User Details**
**Endpoint:** `PUT /users/:id`

**Request Body:**
```json
{
  "name": "Alice Johnson"
}
```

**Response:**
```json
{
  "id": "1710679005678",
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

### **4️⃣ Remove a User**
**Endpoint:** `DELETE /users/:id`

**Response:**
```json
{
  "message": "User deleted successfully"
}
```

