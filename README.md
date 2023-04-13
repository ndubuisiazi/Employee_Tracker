# Employee Tracker

![License](https://img.shields.io/badge/license-MIT-green)

## Description

Employee Tracker is a command-line application built using Node.js, Inquirer, and MySQL to manage a company's employee database. This application allows business owners to view and manage the departments, roles, and employees in their company, helping them to better organize and plan their business.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a MySQL database using the schema provided in the `schema.sql` file.
4. (Optional) Seed the database with sample data using the `seeds.sql` file.
5. Update the `config.js` file with your MySQL database credentials.
6. Make sure you have installed MySQL2, Inquirer, and console.table packages. Use `npm i inquirer@8.2.4` to install the correct version of Inquirer.

## Usage

To run the application, open your terminal, navigate to the project folder, and run `node index.js`. You will be presented with a series of options to view, add, or update departments, roles, and employees in your company's database.

## Features

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role
- (Bonus) Update employee managers
- (Bonus) View employees by manager
- (Bonus) View employees by department
- (Bonus) Delete departments, roles, and employees
- (Bonus) View the total utilized budget of a department (combined salaries of all employees in that department)

## Walkthrough Video

[Click here](https://watch.screencastify.com/v/7lylJep3gZACyGXynS0S) to watch the walkthrough video demonstrating the functionality of the Employee Tracker application.


## Technologies Used

- Node.js
- MySQL
- Inquirer
- console.table

## License

This project is licensed under the MIT License.

## Contributing

To contribute to this project, please submit a pull request with your proposed changes.

## Tests

There are currently no tests available for this application.

## Questions

If you have any questions, please feel free to contact me.

GitHub: [ndubuisiazi](https://github.com/ndubuisiazi)

Email: Ndubuisi.Azi@gmail.com
