# NodeJS Journey

This repository contains a comprehensive journey through Node.js concepts, ranging from basic modules to advanced backend features. Each folder covers a specific topic or project, with practical code samples and explanations.

## Folder Structure

### 1- Node Basics

Fundamental Node.js concepts and examples:

- **1.hello-world/**: Simple Hello World example.
- **2.module-system/**: CommonJS modules, exports/imports, module wrapper.
- **3.npm/**: Introduction to Node Package Manager (NPM) and dependencies.
- **4.core-modules/**: Usage of Node.js core modules like `path`, `fs`, and `http`.
- **5-callback/**: Callback functions and callback hell.
- **6-promise/**: Promises and async code handling.
- **7-async-await/**: Async/Await syntax for asynchronous operations.
- **8-event-emitter/**: EventEmitter usage and custom events.
- **9.express/**: Basic Express.js server setup.

### 2-Express

Express.js fundamentals:

- **index.js**: Basic Express server and routing.
- **middleware.js**: Custom middleware usage.

### 3-Template-Engine

Using EJS template engine with Express:

- **server.js**: Express server rendering EJS templates.
- **templates/**: EJS template files for views.

### 4-RESTAPI

REST API concepts and examples (folder structure only, code not shown).

### 5-Mongoose

Mongoose ODM usage:

- **index.js**: Mongoose schema/model examples and CRUD operations.

### 6-bookstore-api

A full-featured Bookstore REST API:

- **controllers/**: Book CRUD controllers.
- **models/**: Book Mongoose schema/model.
- **routes/**: Express routes for books.
- **database/**: Database connection setup.
- **app.js**: Main Express app entry point.

### 7-authentication-authorization

User authentication and authorization:

- **controllers/**: Auth controller (register/login).
- **models/**: User schema/model.
- **middlewares/**: Auth and role-based access middleware.
- **routes/**: Auth, home, and admin routes.
- **main.js**: Main Express app entry point.

### 8-file-upload

File upload and cloud integration:

- **controllers/**: Image and auth controllers.
- **models/**: User and image schemas.
- **middlewares/**: Auth, role, and file upload middleware.
- **routes/**: Auth, home, admin, and image routes.
- **services/**: Cloudinary upload and email sending.
- **main.js**: Main Express app entry point.

### 9-advanced-mongodb

Advanced MongoDB operations:

- **controllers/**: Product aggregation and analysis.
- **models/**: Product schema/model.
- **routes/**: Product routes.
- **mocks/**: Sample product data.
- **server.js**: Main Express app entry point.

### 10-node-socket

Real-time chat application using Socket.io:

- **server.js**: Express and Socket.io server.
- **index.html**: Chat client UI.
- **demo-app.png**: Demo screenshot.

---

## Getting Started

Each folder is self-contained and can be run independently. Refer to the respective `package.json` for dependencies and scripts. For most projects, run:

```sh
npm install
npm run dev
```

## License

ISC

---

## Author

KariMuhammad
