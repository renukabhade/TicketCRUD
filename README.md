# Ticket Management System

A simple RESTful API for managing support tickets using Node.js and MongoDB.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup and Configuration](#setup-and-configuration)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)


## Technologies Used

- Node.js
- Express
- MongoDB (local)
- Mongoose
- dotenv

## Setup and Configuration

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ticket-management-system.git
   cd ticket-management-system
   
2.Install the dependencies:
npm install
Create a .env file in the root directory and add your MongoDB connection URI:
MONGO_URI=mongodb://localhost:27017/ticket_management


3.Start the server:
npm start
The server will be running on http://localhost:3000.



API Endpoints
**Create a New Ticket**

URL: POST /api/tickets
Request Body:
json

{
  "title": "Issue with login",
  "description": "User unable to login with correct credentials",
  "status": "open"
}

**Retrieve All Tickets**
URL: GET /api/tickets

**Retrieve a Single Ticket by its Unique ID**
URL: GET /api/tickets/:id

**Update a Ticket by its Unique ID**
URL: PUT /api/tickets/:id
Request Body:
json

{
  "title": "Updated Issue",
  "description": "Updated description",
  "status": "in-progress"
}

**Delete a Ticket by its Unique ID**

URL: DELETE /api/tickets/:id
