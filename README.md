# Express Skeleton Project: Quick Start Template for Node.js Applications 🚀

## Overview 📋
The Express Skeleton is a powerful and customizable starting point for creating scalable and robust Express.js applications. With pre-configured tools and libraries, you can skip boilerplate setup and dive directly into development.

## Features 🌟
- **Pre-configured Structure 📁**: Includes routes, models, views, and more.
- **Security-First Approach 🔒**: Utilizes helmet for secure HTTP headers and express-jwt for authentication.
- **Database Integration 💾**: MongoDB-ready with mongoose.
- **API Documentation 📖**: Auto-generate docs using apidoc.
- **Code Quality 🧹**: Enforced with eslint and airbnb style guide.
- **Testing Ready ✅**: Set up for testing with ava and coverage with nyc.
- **Job Scheduling ⏰**: Includes agenda for background job handling.
- **Email Templates ✉️**: Simplifies email notifications with email-templates.

## Installation ⚙️

Create a directory:
``` bash
    mkdir <directory_name>
```
Open the terminal from the directory or in VS Code or any code editor.


### Using npx
```bash
npx create-ls-node-app

```
This will:-
Download the project files.
Install all dependencies.
Set up the initial folder structure.

Getting Started 🚦
Running the Server
Set up environment variables:
create .env file:-
``` bash
touch .env
```

Copy the sample environment file:
``` bash
cp env.SAMPLE .env 
```
Update values in the .env file as per your configuration. 
Add secret(e.g: logic-square) in env file

###NOTE:- Sometimes the express-jwt version automatically Upadted to current version but need to change to "^6.1.1". 
This is the command:-
``` bash
    npm i express-jwt@6.1.1
```

Currently we are using mongodb as localhost(Change it  accordingly your Database):-
``` bash
    MONGODB_CONNECTION_STRING="mongodb://localhost:27017/skeleton-3"
```

Start the development server:

```` bash
npm start
````
Open your browser and navigate to:

http://localhost:3000

Folder Structure 🗂️
``` bash
express-skeleton-3/
│
├── bin/              # Server entry point
├── models/           # Database schemas
├── routes/           # API endpoints
├── public/           # Static assets
├── views/            # EJS templates for front-end rendering
├── tests/            # Unit and integration tests
├── app.js            # Main application logic
├── package.json      # Project dependencies and scripts
└── README.md         # Documentation
```
Available Scripts 📜
Script	Purpose
``` bash 
npm start	Runs the server.
```
``` bash
npm run serve	Starts server with nodemon for live reload.
npm run lint	Checks code quality with eslint.
npm run lint:fix	Fixes lint issues automatically.
npm run test	Runs all tests with coverage using ava and nyc.
npm run gendoc	Generates API documentation using apidoc in /public/docs.
```
Features in Detail 🔍
1. Security 🔒
Implements helmet for protecting your app from common vulnerabilities.
Uses bcrypt for password hashing.
2. Database 💾
MongoDB integration with mongoose for schema definition and ORM.
3. Background Jobs ⏰
Scheduled tasks managed with agenda.
4. API Documentation 📄
Automatically generate API documentation with:
bash
Copy code
npm run gendoc
View the generated docs in the /public/docs folder.
5. Email Support ✉️
Send templated emails with ease using email-templates.
Contributing 🤝
We welcome contributions! Please follow these steps:

Fork the repository:
``` bash
git fork https://github.com/LogicSquare-1996/Node-JS-Scalaton.git
```
Create a new feature branch:
``` bash
git checkout -b feature/new-feature
```
Commit changes:
``` bash
git commit -m "Add new feature"
```
Push changes and create a Pull Request.

License 📜
This project is licensed under the MIT License. Feel free to use it for your own projects.

Contact 📧
- Author: Kiran Debnath
- Email: kiran@logic-square.com
- GitHub: LogicSquare-1996

Start building your next Node.js project with Express Skeleton today! 🎉