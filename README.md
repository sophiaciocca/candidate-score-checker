# Candidate Percentile Checker

## App Description

### This repo is created for the code challenge by Simple Fractal.

![Candidate Percentile Checker](/screenshots/candidate-percentile-checker-screenshot.png?raw=true "Screenshot of Landing Page")

### The app is currently deployed [here](https://sf-candidate-checker.herokuapp.com/)
The app is built with React.js for the front-end and Node.js for the back-end.

The back-end interfaces with a PostgresSQL database.

More development info can be viewed on Built With Section.

The two example CSV files is also uploaded for the purpose of displaying data and testing the app.

The app provides users (presumably, job applicants to the company) with a landing page on which to enter their candidate ID.

When the user hits 'Submit', if the ID exists in our database, his/her percentiles *relative to other similar applicants* will be returned.

If the ID is not a number, an error message will hint to the user to enter a number instead, and if the ID is indeed a number but is not in the database, a similarly helpful error will present itself.

When the user backspaces in the form and takes away a valid number, the results will stop showing.

The percentiles are calculated by querying the database first for the user's ID, eager loading the Company data, then finding other people who (a) have the same title as the candidate, and (b) work at "similar companies", as determined by the fractal_score and a function to compare them.

## Getting Started

* Get the project from Github

	```git clone https://github.com/sophiaciocca/candidate-score-checker.git```

* Install the dependencies

	```cd candidate-score-checker && npm install```

* Run both the front-end and back-end from a single terminal window

	```npm run start-dev```

* open your browser and go to localhost:8080

## Deployment

Currently, deployment is not provided. More information can be viewed in Todo Section.

## Built With

* [React](https://facebook.github.io/react/) - a Javascript Library for Building User Interfaces
* [Node](https://nodejs.org) - a Javascript Runtime
* [Express.js](http://expressjs.com) - The Web Framework
* [PostgreSQL](https://rometools.postgresql.com) - Database
* [Sequelize](https://github.com/sequelize/sequelize) - An easy-to-use multi SQL dialect ORM for Node.js

## Todos

* Better tests

* More built-out UI

* Deployment

## Authors

* **Sophia Ciocca** - *Personal Website* - [sophiaciocca.com](http://sophiaciocca.com)
