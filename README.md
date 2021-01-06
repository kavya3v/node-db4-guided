# Data Modeling

Guided project for **Node DB 4** Module.

## Prerequisites

- [TablePlus](https://tableplus.com) installed.
- A rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- Something to write on and write with.

## Project Setup

- [ ] clone this repository.
- [ ] **CD into the folder** where you cloned **your version**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor uses Knex migrations and seeding to create a multi-table database schema.

## Client Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For `zoos`, the client wants to record:

- name.
- address.

For `animals`, the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information. Label any relationships between tables.
