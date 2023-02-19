Welcome to my task! This readme file contains all commands, plugins and extensions needed to run the tests.

## Cypress instalation

-   npm install cypress --save-dev
-   link to the installation tutorial (https://docs.cypress.io/guides/getting-started/installing-cypress)

### Getting started 🚀

    1. Then, since the installation only installed vanila cypress, but for this task we needed custom commands and functions
    e.g. xpath and findby commands, you need to install those too.
    -link to the xpath installation (https://filiphric.com/cypress-basics-xpath-vs-css-selectors)
    -link to the findby installation (https://testing-library.com/docs/cypress-testing-library/intro/)

    2. For our code to look prettier, we installed prettier extension haha.
    -link to the prettier extension (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
        *Prettier has to be selected as a default code formatter.

    3. The tests can run in the cypress application it self, but they can run in a terminal too. For that, I've installed
    repoter.
    -link to the reporter installation (https://dev.to/bushraalam/using-mochawesome-reporter-with-cypress-54pf)

    4. To run the test in parallel, I've installed extension.
    -link to the installation (https://www.npmjs.com/package/cypress-parallel?fbclid=IwAR1gxwJhP13zCfaL2RVV7Bgz_OrpoqY02xcHBl_eGOGoFVeVbXkwebo7axM)

    5. To see the reports, after running the command, you need to have a liveserver installed into Visual Studio.
    -link to the live server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    Then you need to go to cypress/cypress/reports/html/index.html
    Right click on index.html file and select "Open with live server".

### Prerequisites

-   node ~ 18
-   npm ~ 8

### Usage

```
$ npx cypress open         | Opens cypress application
$ npm run test             | Runs the tests in the terminal, without the application and generates a report and videos
$ npm run cy:parallel      | Runs the tests in parallel and generates videos of the tests
```

### Tech stack

-   JavaScript
-   Cypress

### Overview

Cypress documentation (https://www.cypress.io/)

## Github repository
