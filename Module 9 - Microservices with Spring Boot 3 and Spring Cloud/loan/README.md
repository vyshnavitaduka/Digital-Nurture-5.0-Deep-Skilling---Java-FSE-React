# Loan Microservice

Part of the Module 9 - Microservices with Spring Boot 3 and Spring Cloud exercise.

## Overview

The `loan` service is a Spring Boot microservice that registers itself with the
Eureka Discovery Server and exposes REST endpoints for loan-related operations.

## Running locally

1. Start `eureka-discovery-server` first (port 8761).
2. Start this service:
   ```
   ./mvnw spring-boot:run
   ```
3. The service runs on port **8083** and registers with Eureka as `loan-service`.

## Endpoints

| Method | Path              | Description                  |
|--------|-------------------|-------------------------------|
| GET    | `/loan/{id}`      | Get loan details by ID        |
| GET    | `/loan/status`    | Health check for this service |

## Accessing via the API Gateway

Once `api-gateway` is running (port 8080), this service is reachable at:
```
http://localhost:8080/loan/**
```
