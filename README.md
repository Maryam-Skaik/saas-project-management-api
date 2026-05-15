# 🧠 SaaS Project Management API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-FastAPI-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Architecture](https://img.shields.io/badge/Focus-Middleware%20%26%20Routing-blue)
![Status](https://img.shields.io/badge/Status-Learning%20Project-purple)

A backend project built with **Node.js + Express.js + MongoDB**, designed primarily to deeply understand:

- Express middleware architecture
- Request lifecycle execution model
- Modular routing system
- Multi-tenant organization structure
- Authentication & authorization flow

---

# 🎯 Project Focus

This project is not just a CRUD API.

It is a **learning implementation of how Express.js actually executes requests internally**, including:

- Middleware stack execution order
- Router mounting and delegation
- Request propagation across nested routers
- Error handling pipeline
- Logging and rate-limiting middleware
- JWT authentication flow
- Multi-tenant (organization-based) access control

---

# ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Middleware-based architecture

---

# 🧩 Core Concept: Express.js Execution Model

Express.js is built on top of Node.js HTTP module and introduces a **middleware stack execution system**.

When a request enters the system:

1. Node receives the HTTP request
2. Express wraps it into `req` and `res` objects
3. The request enters a **linear middleware stack**
4. Each middleware decides:
   - handle request
   - or pass control using `next()`

👉 Execution is **sequential, controlled, and interruptible**

---

# 🔁 Middleware Architecture

Middleware is the core execution unit in this project.

Each middleware is a function with access to:

```js
(req, res, next)
````

It can:

* Modify request/response
* Stop execution
* Forward control using `next()`
* Forward errors using `next(err)`

---

## 🧠 Middleware Execution Flow

```
Request → Middleware 1 → Middleware 2 → Middleware 3 → Route Handler → Response
```

If any middleware does NOT call `next()`, execution stops.

---

## 🔥 Types of Middleware in This Project

### 1. Application Middleware

Applied globally:

* Logger middleware
* Rate limiter
* JSON parser

---

### 2. Authentication Middleware

Validates JWT token:

* Extracts user from token
* Attaches user to request
* Blocks unauthorized access

---

### 3. Organization Middleware (Multi-Tenant Layer)

Ensures every request belongs to a valid organization:

* Reads `x-organization-id`
* Validates membership
* Enforces data isolation between organizations

---

### 4. Error Middleware

Special middleware with 4 parameters:

```js
(err, req, res, next)
```

Used for centralized error handling.

---

# 🧭 Routing Architecture

Routes are organized using **Express Routers**, not flat endpoints.

---

## 📦 Route Structure

```
/api
 ├── /auth
 ├── /organizations
 ├── /projects
 ├── /tasks
 ├── /comments
 └── /activity-logs
```

---

## 🧠 Router Internals

Each router is a **mini middleware stack**.

When mounted:

```js
app.use("/api", apiRouter);
```

Express:

* Matches `/api`
* Strips prefix
* Forwards request into nested router stack

---

## 🔄 Nested Routing Flow

Example:

```
/api/projects/:id
```

Execution:

1. Root app receives request
2. Matches `/api` → enters API router
3. Matches `/projects` → enters project router
4. Matches `/:id` → route handler executes

---

# 🏢 Multi-Tenant Architecture

This system supports organization-based isolation.

Every request must include:

```http
x-organization-id: <org_id>
```

Middleware ensures:

* User belongs to organization
* Data is scoped per organization

---

# 🔐 Authentication Flow

1. User logs in
2. JWT token generated
3. Token sent in:

```http
Authorization: Bearer <token>
```

4. Middleware validates token
5. User injected into request:

```js
req.user
```

---

# 📊 Activity Logging System

Every important action triggers an activity log:

* Task creation
* Project updates
* Organization actions

Stored via:

```js
logActivity({
  organization,
  user,
  action,
  entityType,
  entityId
});
```

---

# ⚠️ Error Handling Model

Express uses **error propagation mode**:

* Normal flow: `next()`
* Error flow: `next(err)`

When error occurs:

1. Skip normal middleware
2. Jump to error handlers
3. Return structured response

---

# 🚦 Rate Limiting Middleware

Implements request throttling to protect API:

Common strategies:

* Token bucket
* Fixed window counter
* Leaky bucket

---

# 📌 Request Lifecycle (Full View)

```
1. Node receives HTTP request
2. Express wraps req/res
3. Global middleware executes
4. Auth middleware validates JWT
5. Organization middleware checks tenant
6. Router resolves endpoint
7. Controller executes business logic
8. Activity log middleware records event
9. Response returned
10. Error middleware handles failures (if any)
```

---

# 🧪 Purpose of This Project

This project was built to deeply understand:

* How Express executes middleware internally
* How routing delegation works under the hood
* How large-scale backend systems structure requests
* How multi-tenant APIs are designed
* How middleware pipelines control execution flow

---

# 🚀 Key Learning Outcome

Instead of treating Express as a simple framework, this project treats it as:

> A controlled execution engine built on a middleware stack abstraction
