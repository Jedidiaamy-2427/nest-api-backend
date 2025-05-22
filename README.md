<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
  <a href="https://github.com/Jedidiaamy-2427/nest-api-backend/actions">
    <img src="https://github.com/Jedidiaamy-2427/nest-api-backend/actions/workflows/ci.yml/badge.svg" alt="CI Status" />
  </a>
  <a href="https://www.npmjs.com/package/nest-api-backend">
    <img src="https://img.shields.io/npm/v/nest-api-backend.svg" alt="npm version" />
  </a>
  <a href="https://github.com/Jedidiaamy-2427/nest-api-backend/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Jedidiaamy-2427/nest-api-backend" alt="License" />
  </a>
  <a href="https://github.com/Jedidiaamy-2427/nest-api-backend">
    <img src="https://img.shields.io/github/stars/Jedidiaamy-2427/nest-api-backend?style=social" alt="GitHub stars" />
  </a>
  <a href="https://codecov.io/gh/Jedidiaamy-2427/nest-api-backend">
    <img src="https://codecov.io/gh/Jedidiaamy-2427/nest-api-backend/branch/main/graph/badge.svg" alt="Coverage" />
  </a>
</p>

## Description

This project is a codebase for a backend API developed with [Nest](https://github.com/nestjs/nest), designed to be compatible with any type of application (management, messaging, etc.).  
It natively integrates a JWT authentication system, follows a clear MVC architecture, and adheres to Clean Code principles.  
The project structure is optimized, extensible, and easily customizable to fit your specific needs.



## Project setup

1. **Clone dépôt git**
   ```bash
   git clone <https://github.com/Jedidiaamy-2427/nest-api-backend.git>
   cd api-backend-server
   ```
2. **Install basic dependencies**
   ```bash
   npm install
   ```
3. **Run the interactive setup script**
   > This script will prompt you for the necessary information (project name, database type, ports, etc.), generate the `.env` file, and install the dependencies.
   ```bash
   npx ts-node scripts/setup.ts
   ```
   Si `ts-node` n'est pas installé, lancez d'abord :
   ```bash
   npm install -D ts-node
   ```
4. **Start the project**
   ```bash
   npm run start:dev
   ```

## Docker Setup

To make it easier to install and run your application with Docker, follow these steps:
1. Make sure you have Docker and Docker Compose installed on your machine.
2. Create an `.env` file at the root of the project with the necessary environment variables (the `setup.ts` script can help you).
3. Build and start the Docker containers:
```bash
# Build application 
$ docker-compose up --build
```

The application will be accessible on the port defined in your `.env` file (default 3000).

## API Documentation

The API documentation is automatically generated and available via Swagger. To access it, start the application and open your browser to:

```bash
http://localhost:3001/api-docs
```
This documentation will allow you to visualize and test the different routes of the API.

## More info

- LinkedIn - [Jedidia Amy](www.linkedin.com/in/jedidia-amy-andrianjafiarifetra-5a3494201)