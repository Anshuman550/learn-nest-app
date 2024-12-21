# Employee Management System (EMS)

## **Objective**

Build an Employee Management System (EMS) where administrators can manage employee data, including uploading employee details through Excel files, viewing employee records, and assigning roles. The system will include:

- Authentication and Authorization using JWT and Passport.
- Middleware, Interceptors, Pipes, Guards, and Exception Filters.
- MongoDB integration for storing user and employee data.
- File handling for Excel uploads.

---

## **Features to Implement**

### **1. Authentication and Authorization**

- **User Roles**: Admin, Manager, Employee.
- **Login**: Users log in with email and password.
- **Registration**: Admin can register new users.
- **Authorization**: Role-based access to endpoints.
- **JWT**: Issue tokens for authenticated users.

### **2. Employee Data Management**

- **CRUD Operations**: Admin and Managers can create, read, update, and delete employee records.
- **File Upload**: Admin can upload an Excel file containing employee data.
- **File Parsing**: Parse the Excel file and store data in MongoDB.
- **Search and Filter**: Search employees by name, department, or role.

### **3. Middleware, Interceptors, Guards, Pipes, Exception Filters**

- **Middleware**:
  - Log incoming requests.
  - Validate API keys for certain routes.
- **Interceptors**:
  - Log response times.
  - Transform outgoing responses to a standard format.
- **Guards**:
  - Protect routes based on roles (Admin, Manager, Employee).
- **Pipes**:
  - Validate and transform incoming data (e.g., DTOs for creating or updating employees).
- **Exception Filters**:
  - Handle and format errors globally.

---

## **Flow and Step-by-Step Plan**

### **Step 1: Project Setup**

1. Initialize a new NestJS project.
2. Install dependencies:
   - `@nestjs/mongoose` and `mongoose` for MongoDB.
   - `passport` and `@nestjs/passport` for authentication.
   - `jsonwebtoken` and `@nestjs/jwt` for JWT handling.
   - `multer` for file uploads.
3. Configure MongoDB connection using `MongooseModule`.

### **Step 2: Authentication and Authorization**

1. **Create Auth Module**:
   - Use `PassportModule` and `JwtModule`.
   - Implement strategies for `local` (login) and `jwt` (authorization).
   - Create a login endpoint to issue JWTs.
2. **User Module**:
   - Create a `User` schema with fields like `name`, `email`, `password`, and `role`.
   - Hash passwords using `bcrypt`.
   - Store user details in MongoDB.
3. **Role-Based Guards**:
   - Create a guard to check user roles using the JWT payload.

### **Step 3: Employee Module**

1. **Employee Schema**:
   - Define fields like `name`, `department`, `role`, `dateOfJoining`, `salary`, etc.
2. **CRUD Operations**:
   - Create endpoints for adding, updating, fetching, and deleting employees.
   - Use DTOs with validation pipes.
3. **Search and Filter**:
   - Implement query parameters for searching and filtering employees.

### **Step 4: File Upload and Parsing**

1. **File Upload**:
   - Use `FileInterceptor` with `diskStorage` to handle Excel uploads.
   - Validate file types using the `fileFilter` option.
2. **File Parsing**:
   - Use a library like `xlsx` to parse the Excel file.
   - Convert rows into JSON and save them to MongoDB.
3. **Error Handling**:
   - Use an exception filter to handle invalid files.

### **Step 5: Middleware, Interceptors, Guards, Pipes, and Filters**

1. **Middleware**:
   - Log all incoming requests (method, URL, headers).
   - Add API key validation for specific routes.
2. **Interceptors**:
   - Log execution time for each request.
   - Transform all responses to a standard format (e.g., `{ data: ..., status: ..., message: ... }`).
3. **Guards**:
   - Protect employee CRUD routes based on roles (e.g., only Admins can delete).
4. **Pipes**:
   - Validate incoming DTOs for creating or updating employees.
5. **Exception Filters**:
   - Create a global exception filter to handle and format errors.

### **Step 6: Implement Additional Features**

1. **Pagination**:
   - Implement pagination for employee records.
2. **Export to Excel**:
   - Add an endpoint to export employee data to an Excel file.
3. **Dashboard**:
   - Create an endpoint to provide summary data (e.g., total employees, department-wise count).

---

## **Folder Structure**

```
src/
├── auth/
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   ├── strategies/
│   │   ├── jwt.strategy.ts
│   │   └── local.strategy.ts
├── users/
│   ├── user.module.ts
│   ├── user.service.ts
│   ├── user.controller.ts
│   ├── schemas/
│   │   └── user.schema.ts
├── employees/
│   ├── employee.module.ts
│   ├── employee.service.ts
│   ├── employee.controller.ts
│   ├── schemas/
│   │   └── employee.schema.ts
├── common/
│   ├── interceptors/
│   │   ├── logging.interceptor.ts
│   │   └── transform.interceptor.ts
│   ├── pipes/
│   │   └── validation.pipe.ts
│   ├── guards/
│   │   └── roles.guard.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── middleware/
│       └── logger.middleware.ts
```

---

## **Expected Learning Outcomes**

### **Authentication and Authorization**

- Understand JWT-based authentication and role-based authorization.

### **File Handling**

- Learn to upload and process files using `multer`.

### **MongoDB Integration**

- Work with schemas and CRUD operations using `@nestjs/mongoose`.

### **Core NestJS Concepts**

- Master interceptors, pipes, guards, middleware, and exception filters.

### **API Design**

- Build a RESTful API with proper request validation and error handling.
