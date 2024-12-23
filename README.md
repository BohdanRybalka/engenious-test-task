# Engenious-test-task

## Overview
This project is an automation framework built using Playwright and TypeScript. It is designed to facilitate end-to-end testing of web applications.

## Key Features
- **Page Object Model (POM)**: Promotes reusable and maintainable code by encapsulating page-specific behaviors and elements.
- **Environment Configuration**: Uses the `example.env` package to manage environment-specific configurations.
- **Data-Driven Testing**: Incorporates data providers like `UserFactory` to generate test data dynamically.
- **Test Fixtures**: Leverages Playwright's fixtures for setting up and tearing down test environments.

## Installation
To install the project dependencies, run:
```sh
npm install
```

## Running Tests
To run the tests, execute:
```sh
run:tests:headless
```

P.S. To run the test paste your existing user credentials in the user 
object in the test.

