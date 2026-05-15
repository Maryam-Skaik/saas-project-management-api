# 📌 SaaS Project Management API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

A production-style backend API for a **multi-tenant SaaS Project Management system**, built with **Node.js, Express, and MongoDB**.
The system simulates real-world SaaS architecture including authentication, organization-based isolation, role-based access control, and modular service design.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcryptjs
* Joi Validation
* Express Rate Limit
* Helmet (Security)
* Morgan (Logging)
* CORS

---

## 🧠 Architecture Overview

This project is designed using **layered backend architecture**:

```
Client → Routes → Middleware → Controllers → Services → Database
```

### Key Design Principles:

* Multi-tenant SaaS architecture (organization isolation)
* Modular feature-based structure
* Middleware-driven request lifecycle
* Separation of concerns (Controller / Service / Data layer)
* Centralized error handling

---

## 📁 Project Structure

```
saas-project-management-api/
│
├── server.js
├── package.json
├── .env.example
│
└── src/
    ├── app.js
    │
    ├── config/
    │   ├── db.js
    │   └── env.js
    │
    ├── database/
    │   └── seed.js
    │
    ├── middleware/
    │   ├── auth.middleware.js
    │   ├── error.middleware.js
    │   ├── organization.middleware.js
    │   ├── rateLimit.middleware.js
    │   ├── rbac.middleware.js
    │   ├── validate.middleware.js
    │   └── logger.middleware.js
    │
    ├── modules/
    │   ├── auth/
    │   ├── organizations/
    │   ├── projects/
    │   ├── tasks/
    │   ├── comments/
    │   └── activityLogs/
    │
    ├── models/
    │   ├── User.js
    │   ├── Organization.js
    │   ├── Project.js
    │   ├── Task.js
    │   ├── Comment.js
    │   └── ActivityLog.js
    │
    ├── routes/
    │   └── index.js
    │
    ├── utils/
    │   ├── ApiError.js
    │   ├── asyncHandler.js
    │   ├── jwt.js
    │   └── constants.js
    │
    ├── services/
    │   └── activity.service.js
    │
    └── repositories/
        └── base.repository.js

```

---

## 🔐 Features

### 🔑 Authentication

* User registration & login
* JWT-based authentication
* Password hashing (bcrypt)

### 🏢 Multi-Tenant Organizations

* Create / join organizations
* Organization-based data isolation
* Request scoped by `x-organization-id`

### 📊 Project Management

* Create and manage projects
* Organization-level project isolation

### ✅ Task Management

* Task creation and assignment
* Status tracking (TODO / IN_PROGRESS / DONE)
* Task filtering per project

### 💬 Comments System

* Task-based discussions
* User comment tracking

### 📜 Activity Logging

* Tracks all important system actions
* Organization-level audit trail

---

## 🧱 Middleware System

The request lifecycle is controlled by layered middleware:

* Authentication Middleware (JWT validation)
* Organization Middleware (tenant resolution)
* RBAC Middleware (role-based access)
* Rate Limiting Middleware
* Validation Middleware (Joi)
* Central Error Handler

---

## 🔁 Request Flow

```
Request
 → Logger Middleware
 → Rate Limiter
 → Auth Middleware
 → Organization Middleware
 → RBAC Middleware
 → Route Handler
 → Service Layer
 → Database
 → Response
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Marym-Skaik/saas-project-management-api.git
cd saas-project-management-api
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment

Create `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/saas_pm
JWT_SECRET=your_secret_key
```

---

### 4. Run Server

```bash
npm run dev
```

---

### 5. Seed Database (optional)

```bash
npm run seed
```

---

## 🧪 API Testing (Postman)

### Base URL:

```
http://localhost:5000/api
```

---

### 🔑 Auth

* POST `/auth/register`
* POST `/auth/login`

---

### 🏢 Organizations

* POST `/orgs`
* POST `/orgs/:id/join`

---

### 📁 Projects

* POST `/projects`
* GET `/projects`

Headers:

```
Authorization: Bearer <token>
x-organization-id: <org_id>
```

---

### ✅ Tasks

* POST `/tasks`
* GET `/tasks/project/:projectId`
* PATCH `/tasks/:id/status`

---

### 💬 Comments

* POST `/comments`
* GET `/comments/task/:taskId`

---

### 📜 Activity Logs

* GET `/activity-logs`

---

## 📌 Example Workflow

1. Register user
2. Login → get JWT
3. Create organization
4. Create project
5. Create task
6. Add comments
7. Track activity logs

---

## 🧠 Learning Outcomes

This project demonstrates:

* Real-world Express architecture design
* Middleware pipeline engineering
* SaaS multi-tenant systems
* Backend modularization
* Clean separation of concerns
* Production-level API structure thinking
