

## Summary
  - [what's the project structure?](#whats-the-project-structure)
  - [how to run and test the endpoint](#how-to-run-and-test-the-endpoint)
  - [how to test the code](#how-to-test-the-code)
  - [how to generate the coverage report](#how-to-generate-the-coverage-report)
  - [about the sonarcloud integration](#about-the-sonarcloud-integration)
  - [licensing](#licensing)

## what's the project structure?
```
  .
  ├── LICENSE
  ├── README.md
  ├── package.json
  ├── package-lock.json
  ├── src
  │   ├── controller.js
  │   ├── index.js
  │   ├── router.js
  │   └── service.js
  └── test
      ├── controller.test.js
      ├── index.test.js
      ├── router.test.js
      └── service.test.js
```

## how to run and test the endpoint
Prerequisites
```
  $ node --version
  v16.6.2
```
Run
```
  $ npm start
```

Test the endpoint
```
  $ curl localhost:3000/posts
```
## how to test the code
We're using [Jest](https://jestjs.io/), you can run this npm script:
```
  $ npm run test:summary
  PASS  test/index.test.js
  PASS  test/router.test.js
  PASS  test/controller.test.js
  PASS  test/service.test.js

  Test Suites: 4 passed, 4 total
  Tests:       7 passed, 7 total
  Snapshots:   0 total
  Time:        2.269 s
```
**Tip**: You can also try the `npm test` or `npm run test:verbose` scripts :smile:

## how to generate the coverage report
We're using [istanbul](https://istanbul.js.org/) and it's included with Jest, you can run this npm script:
```
  $ npm run coverage
  PASS  test/index.test.js
  PASS  test/router.test.js
  PASS  test/controller.test.js
  PASS  test/service.test.js

  ---------------|---------|----------|---------|---------|-------------------
  File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
  ---------------|---------|----------|---------|---------|-------------------
  All files      |   95.83 |      100 |   85.71 |   95.83 |                   
   controller.js |     100 |      100 |     100 |     100 |                   
   index.js      |   83.33 |      100 |       0 |   83.33 | 9                 
   router.js     |     100 |      100 |     100 |     100 |                   
   service.js    |     100 |      100 |     100 |     100 |                   
  ---------------|---------|----------|---------|---------|-------------------

  Test Suites: 4 passed, 4 total
  Tests:       7 passed, 7 total
  Snapshots:   0 total
  Time:        1.459 s
```

Also you can check the results in the generated `coverage\lcov-report\index.html` file

