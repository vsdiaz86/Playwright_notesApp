# CodeceptJS + Playwright
A testing framework coded in CodeceptJS and Playwright.

## Setup

To run these tests, you will need the following:
* Any OS type
* Node.js 19.4.0 or later
* Chrome 97 or later

```bash

$ cd e2e
$ npm install
$ npx playwright install 

## Get URL and configure .env file

Copy the `.env-template` file to a new file, and name it `.env`. In the `.env` file, add the server URL, so the tests will know which server to connect to.


## Running the tests with an existing server (All in one)

To run all the tests at once, use the command `npx codeceptjs run`.
(Always inside the /e2e folder)

## Running tests with an existing server (Specific test)

To run especific tests you can use @flags :

```bash
$ npx codeceptjs run --grep @test
```

see: https://codecept.io/commands/#run-multiple to more examples of how to execute tests

### Debugging

To debug the tests, you will need to set `DEBUG=true`; if `DEBUG` receives `true`, the logs will show in the console from which we start the tests. Also, you can pass `--debug` when run a test. 

see: https://codecept.io/commands/#run-multiple


### Visual Regression

Our test suite includes visual regression specs that can be execute separately with `npx codeceptjs run --grep "@visual-regression"` (desktop only). It will take screenshots of various views and components of the client or failed cases and save them inside the `./output` folder. Visual regression uses as base folder `./support/screenshots/base/` and diff folder `./support/screenshots/diff/`.


```

## Running Allure Reports

To run reports:

```bash
$ npx codeceptjs run --grep @test --plugins allure

or

$ npx codeceptjs run --grep @all --plugins allure

```
In local environment, go to main directory project path and execute the command 
to see the results:
```bash
$ allure serve output

```
