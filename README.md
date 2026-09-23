# 🚚 SmartLogix –  Intelligent Logistics & Route Optimization System

# 📖 Overview

SmartLogix is an intelligent logistics management platform that automates shipment planning and resource allocation. Instead of relying on manual dispatch decisions, the system automatically identifies the nearest warehouse, allocates the nearest available driver, selects the most suitable vehicle based on shipment constraints, computes the shortest delivery route using Dijkstra's algorithm, and estimates delivery time.

The platform combines optimization algorithms, interactive maps, and a Spring Boot backend to streamline logistics operations and improve dispatch efficiency.

---

## 📌 Table of Contents

- Overview
- Features
- System Architecture
- Tech Stack
- Project Structure
- Database Design
- API Endpoints
- Optimization Engine
- Screenshots
- Installation
- Running the Project
- Future Improvements
- Author

---

# 📖 Overview

SmartLogix is designed to reduce manual effort in logistics operations by automating shipment planning and management.

The platform allows users to:

- Create and manage shipments
- Automatically assign vehicles
- Automatically assign drivers
- Select the most suitable warehouse
- Compute the shortest delivery route
- Estimate delivery time
- Track shipments in real time (WebSocket infrastructure)

The system uses graph-based route optimization and follows a layered Spring Boot architecture.

---

# ✨ Features

## Authentication

- User Registration
- User Login
- BCrypt Password Hashing

---

## Shipment Management

- Create Shipment
- View Shipments
- Update Shipment
- Delete Shipment

---

## Intelligent Optimization

When a shipment is created, SmartLogix automatically:

- Selects the best warehouse
- Selects the best driver
- Selects the best vehicle
- Computes the shortest delivery route
- Estimates delivery time

---

## Route Planning

- Graph-based road network
- Dijkstra's Shortest Path Algorithm
- ETA calculation

---

## Maps

- Interactive map using Leaflet
- Address selection using GraphHopper
- Latitude & Longitude storage

---

## Real-Time Tracking

Backend infrastructure implemented using Spring WebSocket for live shipment tracking.

---

# 🏗️ System Architecture

```
                +----------------------+
                |     Next.js Frontend |
                +----------+-----------+
                           |
                     REST APIs
                           |
                +----------v-----------+
                |    Spring Boot API   |
                +----------+-----------+
                           |
                Business Logic Layer
                           |
        +---------+--------+---------+
        |         |                  |
 Vehicle Service Driver Service Warehouse Service
        |         |                  |
        +---------+--------+---------+
                  |
        Route Optimization Service
                  |
            Dijkstra Algorithm
                  |
             PostgreSQL Database
```

---

# 🛠 Tech Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Leaflet
- GraphHopper

---

## Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Spring WebSocket

---

## Database

- PostgreSQL

---

## Algorithms

- Dijkstra's Algorithm

---

## Security

- BCrypt Password Hashing

---

## Tools

- Maven
- Git
- Postman

---

# 📂 Project Structure

```
SmartLogix
│
├── frontend
│   ├── app
│   ├── components
│   ├── public
│   └── ...
│
├── java-engine
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── model
│   ├── config
│   └── ...
│
└── README.md
```

---

# 🗄 Database Design

Main Tables

- Users
- Shipments
- Drivers
- Vehicles
- Warehouses
- Tracking Events
- Road Network

---

# 🚀 Optimization Workflow

```
Customer Creates Shipment
          │
          ▼
Locate Nearest Warehouse
          │
          ▼
Allocate Nearest Available Driver
          │
          ▼
Select Best Vehicle
          │
          ▼
Compute Shortest Route
          │
          ▼
Calculate ETA
          │
          ▼
Save Shipment
          │
          ▼
Return Optimized Dispatch Plan
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/signup |
| POST | /api/auth/signin |

---

## Shipments

| Method | Endpoint |
|---------|----------|
| POST | /api/shipments |
| GET | /api/shipments |
| GET | /api/shipments/{id} |
| PUT | /api/shipments/{id} |
| DELETE | /api/shipments/{id} |

---

## Optimization

| Method | Endpoint |
|---------|----------|
| POST | /api/optimization |

---

## Vehicles

| Method | Endpoint |
|---------|----------|
| GET | /api/vehicles |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/shashirajt20-byte/SmartLogix.git
```

---

## Backend

```bash
cd backend
```

Install dependencies

```bash
mvn clean install
```

Run

```bash
mvn spring-boot:run
```

---

## Frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

## Database

Create a PostgreSQL database.

Update:

```
application.properties
```

with your:

- Database URL
- Username
- Password

Run the application.

---

# 📈 Future Improvements

- JWT Authentication
- Docker & Docker Compose
- Cloud Deployment
- Redis Caching
- Role-Based Authorization
- Notification Service
- Delivery Analytics Dashboard

---

# 👨‍💻 Author

**Shashi Raj Sharma**

B.Tech Computer Science Engineering

GitHub: https://github.com/shashirajt20-byte

LinkedIn: https://www.linkedin.com/in/shashi-raj-7207a31b0/

---

# ⭐ If you found this project useful

Please consider giving it a ⭐ on GitHub.
