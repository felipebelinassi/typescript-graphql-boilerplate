# 🚀 TypeScript GraphQL API Boilerplate
A simple GraphQL API boilerplate using Express, Apollo Server, TypeORM, TypeDI and much more.  
This project was developed for study purposes and also for a GraphQL API presentation. I pretend to maintain this project and add new features to it, so feel free to suggest improvements and give any feedback 😊.

*Documentation was inspired by the [Express TypeScript Boilerplate](https://github.com/w3tecch/express-typescript-boilerplate) documentation by W3Tech. Check it out, it's very nice.*

## Table of Contents

- [🚀 TypeScript GraphQL API Boilerplate](#-typescript-graphql-api-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Step 1: Set up the development environment](#step-1-set-up-the-development-environment)
    - [Step 2: Clone the project](#step-2-clone-the-project)
    - [Step 3: Install dependencies](#step-3-install-dependencies)
    - [Step 3: Set up the local database](#step-3-set-up-the-local-database)
    - [Step 4: Init the application](#step-4-init-the-application)
  - [Scripts and Tasks](#scripts-and-tasks)
    - [Install](#install)
    - [Database Migration](#database-migration)
    - [Building the project and run it](#building-the-project-and-run-it)
    - [Running in dev mode](#running-in-dev-mode)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [Dependencies Documentations](#dependencies-documentations)
  - [Author](#author)

## Getting Started

### Step 1: Set up the development environment

You need to set up your development environment before you can do anything.

- Install [Node.js and NPM](https://nodejs.org/en/download/)
- Make sure you have a recent version of [Docker](https://docs.docker.com/engine/installation/) installed, since it will be used for running the database locally
- Install yarn globally. This is **optional** since you can use npm, but be aware that the documentation will mention the yarn scripts.
  
```bash
yarn global add yarn
```

### Step 2: Clone the project

Fork or clone this project and then open it using your favorite IDE.
```bash
git clone git@github.com:felipebelinassi/typescript-graphql-boilerplate.git

# Open the project directory
cd typescript-graphql-boilerplate
```

Copy the `.env.example` file and rename it to `.env`. In this file you have to add the required environment variables for the application to work. You can see the details regarding the variables in the [Environment Variables](#-environment-variables) section.

### Step 3: Install dependencies

After cloning the project, you need to install the required dependencies for it to run.

```bash
yarn
```

### Step 3: Set up the local database

Run the following script to build your local database image (PostgreSQL) using Docker.

```bash 
docker-compose up -d
```

This will build the database using the settings defined in the `docker-compose.yml` file. After that you can connect to the DB using some tool like DBeaver if you want.

Then, after initializing the database, you need to run the migrations for it. Simple run the following script:
```bash
yarn db:migrate
```

This will run all the migration files and create the required tables at your local database.
> This step uses the `ormconfig.json` file, so make sure the configs are the same as you defined in the docker-compose file

### Step 4: Init the application

Finally you can start your project with the following script.

```bash
yarn start:dev
```

> This will start a local server using `ts-node-dev`, which will watch for any file changes and will restart the server according to these changes.
> The server address will be available to you as `http://localhost:{{port}}`. Port is the same you defined in the `.env` file

## Scripts and Tasks

All script are defined in the `package.json` file, but the most important ones are listed here.

### Install
- Install all dependencies with `yarn install`

### Database Migration
- To migrate your database run `yarn db:migrate`. This will create the required tables in your local database.

### Building the project and run it
- If you run the `yarn start` script, it will automatically trigger the `yarn prestart` script, which runs `yarn build`. The build script just runs the `tsc` compiler and generate the JavaScript files inside the `build` folder. After the compilation, the server will start.
- There's also another script called `yarn prebuild`, which will be triggered before `yarn build`, and it simply removes the current `build` folder before transpiling the code again.
- The server will be available at `http://localhost:{{port}}`.

### Running in dev mode
- Run `yarn start:dev` to start the project with `ts-node-dev`.
- The server will be available at `http://localhost:{{port}}`

## Project Structure

| Name                               | Description |
| ---------------------------------- | ----------- |
| **build/**                         | Compiled source files will be placed here |
| **src/**                           | Source files |
| **src/config/**                    | Project configuration files |
| **src/entities/**                  | TypeORM Entities and repositories, separated by domain |
| **src/graphql/resolvers/**         | GraphQL resolvers separated by domain and function (queries and mutations) |
| **src/graphql/resolvers/*/types/** | GraphQL object and input types |
| **src/database/**                  | Database configuration layer |
| **src/database/migrations/**       | Database migration scripts |
| .env.example                       | Environment configurations example file |
| ormconfig.sql                      | TypeORM database config used only for migrations |


## Environment Variables

The list bellow features the environment variables defined in the application. All variables are **required**.

| Environment      | Description                                  |
|----------------- |--------------------------------------------- |
| PORT             | Port where the server will start             |
| DB_HOST          | Database host                                |
| DB_PORT          | Database port number                         |
| DB_USER          | Database username                            |
| DB_PASSWORD      | Database user password                       |
| DB_NAME          | Database name                                |

## Dependencies Documentations

| Dependency                        | Description                       |
| --------------------------------- | --------------------------------- |
| [Express](https://expressjs.com/) | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. |
| [dotenv](https://www.npmjs.com/package/dotenv) | Loads environment variables from a .env file into process.env. |
| [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) | Tweaked version of node-dev that uses ts-node under the hood for watching code changes and restarting the server. |
| [Joi](https://joi.dev/) | The most powerful schema description language and data validator for JavaScript |
| [Apollo Server Express](https://www.apollographql.com/docs/apollo-server/v1/servers/express/) | Express integration Apollo Server, an open-source and spec-compliant GraphQL server. |
| [GraphQL](http://graphql.org/graphql-js/) | A query language for your API. |
| [TypeGraphQL](https://typegraphql.com/) | Modern framework for GraphQL API in Node.js. |
| [TypeDI](https://github.com/pleerock/typedi) | Dependency Injection for TypeScript. |
| [TypeORM](http://typeorm.io/#/) | TypeORM is highly influenced by other ORMs, such as Hibernate, Doctrine and Entity Framework. |
| [TypeORM TypeDI Extensions](https://www.npmjs.com/package/typeorm-typedi-extensions) | Decorators for TypeORM that can be used with TypeDI. |

## Author
👨‍💻 Felipe Belinassi  
📫 Reach me at my [email](mailto:felipebelinassi@gmail.com) or [LinkedIn](https://www.linkedin.com/in/felipe-belinassi/).
