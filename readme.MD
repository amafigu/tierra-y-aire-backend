# Backend App for Music School

This application serves as the backend for [Tierra y Aire Music School](https://github.com/amafigu/tierra-y-aire).

## Technologies Stack

- **Backend**: Node / Express / TypeScript / GraphQL / Docker 
- **Tests**: Jest 
- **Database**: PostgreSQL
- **ORM**: Sequelize

##  Functionalities

- Manage concerts and events
- User authentication
- API endpoints for CRUD operations on concerts
- Integration with PostgreSQL database

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amafigu/tierra-y-aire-backend.git
   ```

2. Navigate to the project directory:

   ```sh
   cd tierra-y-aire-backend
   ```

4. Install dependencies 
   ```sh
   npm install
   ```
5. Create and configure environment files:

  - .env.development
  - .env.test
  - .env.production


6. Build and start the Docker containers:

    ```sh
    NODE_ENV=development docker-compose --env-file .env.development up --build
    ```

7. To run tests inside the Docker container:

    ```sh
    docker exec -it tierra-y-aire-backend npm test
    ```

## Additional Notes


- The docker-compose.yml file is configured to use environment variables from the .env.development file.

