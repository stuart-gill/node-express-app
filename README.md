# _Node Express Postgres Messaging API app_

#### _A Node.js project to design API structure end point to CRUD users and messages on local Postgres DB_

#### By _**Stuart Gill**_

## Specification

- _The purpose of this program is to provide API endpoints for a messaging app, and rather than using local models, use information from a Postgres database that is locally created._
- _There are three routes: user, session, and message_
- _In users, there are API endpoints for get all users and get one user by ID_
- _In session, there is an endpoint for get current session_
- _In message, there are endpounts for get all and get by ID; post; and delete_

## Live Project

## Setup/Installation Requirements

- _Clone this repository_
- _Create .env file in root folder and put your port, DB name, user and password there_
- _Create a .gitignore file in root and list your .env file_
- _Create a local Postgres database with pgAdmin or similar_
- _Run the program with npm start, which will create tables in your database and seed them_
- _Use a program like Postman to send an API call to http://localhost:3000/message, /user, or /session_
- _Available API endpoints are listed in specifications above_

## Support and contact details

_reach Stuart Gill at stuart.a.gill@gmail.com _

## Technologies Used

- _Node.js_
- _Express.js_
- _Sequelize_
- _Postgress_
- _Nodemon_
- _pgAdmin3_
- _REST API_
- _Postman_

### License

_This software is licensed under the MIT license_

Copyright (c) 2019 **_Stuart Gill_**
