# MERN Stack E-Commerce Platform

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The MERN Stack E-Commerce Platform is a full-featured web application designed to provide a seamless online shopping experience. Built with MongoDB, Express, React, and Node.js, this platform incorporates modern web technologies to deliver a fast, responsive, and scalable solution for e-commerce needs.

## Features
- User Authentication and Authorization
- Product Listings with Detailed Descriptions
- Shopping Cart and Checkout Process
- Order Management System
- Admin Dashboard for Managing Products and Orders
- Responsive Design using Bootstrap 5
- State Management with Redux Toolkit
- Enhanced UI with React Icons and React Spinners

## Tech Stack
- **Frontend:**
  - React: ^18.3.1
  - React DOM: ^18.3.1
  - React Router DOM: ^6.23.1
  - React Icons: ^5.2.1
  - React Spinners: ^0.13.8
  - Redux Toolkit
  - Bootstrap 5

- **Backend:**
  - Node.js
  - Express

- **Database:**
  - MongoDB

## Installation
To get started with the project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Neelabh-Sharma/EcommerceWebApp-MernStack.git
    ```

2. **Install dependencies:**
   - For the backend:
     ```bash
     cd server
     npm install
     ```

   - For the frontend:
     ```bash
     cd client
     npm install
     ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
