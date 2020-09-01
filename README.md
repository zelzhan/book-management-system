# Book Management System

This project is written with Angular, Nest.js and nx/nrwl (monorepo management tool).  

# DEMO:
http://46.101.192.55/

## Available endpoints

- GET /books/ - Returns a list of books in the database in JSON format
- GET /book/{{id}}/ - Returns a detail view of the specified book id. Nest author details in JSON format
- PUT /book/{{id}} - Updates the book with the specified id
- DELETE /book/{{id}} - Deletes the book with the specified id
- GET /authors/ - Returns a list of authors in the database in JSON format
- GET /author/{{id}}/ - Returns a detail view of the specified author id
- POST /author/ - Creates a new author with the specified details - Expects a JSON body
- POST /book/ - Creates a new book with the specified details - Expects a JSON body


## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
