# 🚚 SmartLogix – Intelligent Logistics & Route Optimization System

SmartLogix is an intelligent logistics management system that automates shipment planning, resource allocation, and route optimization. The system automatically selects suitable warehouses, drivers, and vehicles, calculates optimized delivery routes using Dijkstra's algorithm, and estimates delivery time.

The project is built around a Spring Boot backend with PostgreSQL persistence and an integrated web dashboard served directly from the Spring Boot application.

---

## 📖 Overview

SmartLogix is designed to reduce manual effort in logistics operations by automating the complete shipment optimization workflow.

The system provides functionality for:

- User registration and authentication
- Shipment management
- Vehicle management
- Driver allocation
- Warehouse selection
- Route optimization
- Shortest-path calculation
- ETA estimation
- Real-time shipment tracking infrastructure
- Interactive map visualization
- Logistics monitoring through an integrated dashboard

The dashboard is served directly by the Spring Boot application and is available at:


http://localhost:8080


✨ Features


🔐 Authentication

User registration
User login
BCrypt password hashing

📦 Shipment Management

Create shipments
View shipments
View shipment details
Update shipments
Delete shipments

🚚 Intelligent Resource Allocation

For a shipment, the system can determine:

Suitable warehouse
Available driver
Suitable vehicle
Delivery route
Estimated delivery time
🗺️ Route Optimization
Graph-based road network
Dijkstra's shortest-path algorithm
Route calculation
ETA estimation
Latitude and longitude based locations
🌍 Interactive Maps
Leaflet-based interactive map
GraphHopper integration
Location coordinates
Route visualization
📡 Real-Time Tracking

Spring WebSocket infrastructure is included for supporting live shipment tracking and future real-time vehicle updates.

📊 Integrated Dashboard

The project includes a web dashboard served directly from Spring Boot.

The dashboard provides:

Shipment overview
Vehicle information
Driver information
Warehouse information
Route optimization
Optimization results
Delivery information
Interactive map visualization


🏗️ System Architecture

```
                         ┌─────────────────────────┐
                         │     SmartLogix UI        │
                         │  HTML / CSS / JavaScript │
                         │       Leaflet Map        │
                         └────────────┬────────────┘
                                      │
                                  REST APIs
                                      │
                         ┌────────────▼────────────┐
                         │     Spring Boot API      │
                         │                          │
                         │      Controllers         │
                         └────────────┬────────────┘
                                      │
                              Business Logic
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
              ▼                       ▼                       ▼
      Vehicle Service         Driver Service         Warehouse Service
              │                       │                       │
              └───────────────────────┼───────────────────────┘
                                      │
                                      ▼
                         Route Optimization Service
                                      │
                                      ▼
                         Dijkstra Shortest Path
                                      │
                                      ▼
                              PostgreSQL Database

```


🛠️ Tech Stack

Backend
Java 21
Spring Boot
Spring Data JPA
Hibernate
Spring WebSocket
Database
PostgreSQL
Dashboard
HTML
CSS
JavaScript
Maps
Leaflet
GraphHopper
Algorithm
Dijkstra's Shortest Path Algorithm
Security
BCrypt Password Hashing
Development Tools
Maven
Git
GitHub
Postman


📂 Project Structure

```


SmartLogix
│
├── java-engine
│   │
│   ├── src
│   │   ├── main
│   │   │   │
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── scm
│   │   │   │           └── java_engine
│   │   │   │               │
│   │   │   │               ├── controller
│   │   │   │               ├── service
│   │   │   │               ├── repository
│   │   │   │               ├── entity
│   │   │   │               ├── model
│   │   │   │               ├── graph
│   │   │   │               └── config
│   │   │   │
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── static
│   │   │           └── index.html
│   │   │
│   │   └── test
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
└── README.md

```

🗄️ Database Design

The application uses PostgreSQL for persistent storage.

The main entities include:

Users
Shipments
Drivers
Vehicles
Warehouses
Tracking Events
Road Network

Spring Data JPA and Hibernate are used for database interaction and entity management.

🚀 Optimization Workflow

```

                    Shipment Request
                           │
                           ▼
                 Identify Warehouse
                           │
                           ▼
                Find Available Driver
                           │
                           ▼
                 Select Suitable Vehicle
                           │
                           ▼
                 Calculate Shortest Route
                           │
                           ▼
                  Dijkstra Algorithm
                           │
                           ▼
                    Calculate ETA
                           │
                           ▼
                  Save Shipment Data
                           │
                           ▼
                Return Optimization Result

```

🧠 Optimization Engine

The optimization engine is responsible for determining an efficient dispatch plan for a shipment.

The process combines resource allocation with graph-based route optimization.

Route Calculation

The road network is represented as a graph consisting of nodes and edges.

Dijkstra's algorithm is used to calculate the shortest path between the required locations.

```

Start
  │
  ▼
Warehouse
  │
  ├───────────────┐
  ▼               ▼
 Node A          Node B
  │               │
  ▼               ▼
 Node C ──────── Node D
                  │
                  ▼
              Destination

```

The resulting route can then be displayed on the dashboard using the interactive map.

🔗 API Endpoints

```

Authentication
Method	Endpoint
POST	/api/auth/signup
POST	/api/auth/signin
Shipments
Method	Endpoint
POST	/api/shipments
GET	/api/shipments
GET	/api/shipments/{id}
PUT	/api/shipments/{id}
DELETE	/api/shipments/{id}
Optimization
Method	Endpoint
POST	/optimize
Vehicles
Method	Endpoint
GET	/vehicles

```

⚙️ Installation
1. Clone the Repository
git clone https://github.com/shashirajt20-byte/SmartLogix.git

Navigate into the project:

cd SmartLogix
2. Navigate to the Backend
cd java-engine
3. Configure PostgreSQL

Create a PostgreSQL database and update the database configuration in:

src/main/resources/application.properties

Configure the following according to your local PostgreSQL setup:

spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
4. Install Dependencies

Using Maven:

mvn clean install
▶️ Running the Project

Start the Spring Boot application:

mvn spring-boot:run

Once the application starts successfully, open:

http://localhost:8080

The SmartLogix dashboard will be served directly by the Spring Boot application.

🖥️ Dashboard

The project contains an integrated dashboard rather than a separate frontend application.

The dashboard is located inside the Spring Boot application's static resources:

src/main/resources/static/index.html

Spring Boot serves this page automatically.

Open:

http://localhost:8080

The dashboard can be used to interact with the logistics backend and visualize optimization results.

🗺️ Map & Route Visualization

SmartLogix uses Leaflet to provide an interactive map interface.

The dashboard can visualize:

Warehouses
Drivers
Vehicles
Shipment locations
Delivery destinations
Optimized routes

GraphHopper is used for location/routing-related functionality where configured.

📡 Real-Time Tracking

Spring WebSocket infrastructure is included to support real-time shipment tracking.

The architecture can be extended to provide:

```

Vehicle
   │
   ▼
GPS / Location Update
   │
   ▼
WebSocket
   │
   ▼
Spring Boot Backend
   │
   ▼
Dashboard
   │
   ▼
Live Vehicle Location

```


🔮 Future Improvements


JWT-based authentication
Role-based authorization
Docker and Docker Compose
Cloud deployment
Redis caching
Advanced delivery analytics
Real-time GPS vehicle tracking
Push notifications
Machine-learning based route optimization
Distributed route optimization
Improved ETA prediction
👨‍💻 Author

Shashi Raj Sharma

B.Tech Computer Science Engineering

GitHub:
https://github.com/shashirajt20-byte

LinkedIn:
https://www.linkedin.com/in/shashi-raj-7207a31b0/
