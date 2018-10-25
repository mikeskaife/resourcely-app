# resourcely-app

React based application for resource management in project teams

## Usage

### Start application

**npm run start**

Will also run linting and all unit tests

Runs on port 3000 by default

### Run unit tests

**npm run test**

### Unit test report

**npm run test:report**

Generates a report at /mochawesome-report/mochawesome.html

### Lint code

**npm run lint**

### Test coverage

**npm run cover**

### Run test coverage report

**npm run cover:report**

Stores a coverage report at /coverage/lcov-report/index.html

### Build production artifacts

**npm run build**

Outputs are stored in /dist directory

### Generate JSDoc documentation

**npm run docs**

Generates documentation in /docs folder

## Dependencies

### Production Dependencies

| **Dependency**     | **Use**                                                |
| ------------------ | ------------------------------------------------------ |
| babel-polyfill     | Polyfill for Babel features that cannot be transpiled  |
| bootstrap          | CSS Framework                                          |
| jquery             | Only used to support toastr                            |
| prop-types         | React PropTypes library                                |
| react              | React library                                          |
| react-dom          | React library for DOM rendering                        |
| react-redux        | Redux library for connecting React components to Redux |
| react-router       | React library for routing                              |
| react-router-dom   | Separate library for some React Router components      |
| react-router-redux | Keep React Router in sync with Redux application state |
| redux              | Library for unidirectional data flows                  |
| redux-thunk        | Async redux library                                    |
| toastr             | Display messages to the user                           |

### Development Dependencies

| **Dependency**                  | **Use**                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                       | Babel Command line interface                                                                              |
| babel-core                      | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                    | Adds Babel support to Webpack                                                                             |
| babel-plugin-react-display-name | Add displayName to React.createClass calls                                                                |
| babel-preset-es2015             | Babel preset for ES2015                                                                                   |
| babel-preset-react              | Add JSX support to Babel                                                                                  |
| babel-preset-react-hmre         | Hot reloading preset for Babel                                                                            |
| babel-register                  | Register Babel to transpile our Mocha tests                                                               |
| chai                            | Unit testing assertion framework                                                                          |
| cheerio                         | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| colors                          | Adds color support to terminal                                                                            |
| compression                     | Add gzip support to Express                                                                               |
| cross-env                       | Cross-environment friendly way to handle environment variables                                            |
| css-loader                      | Add CSS support to Webpack                                                                                |
| enzyme                          | Simplified JavaScript Testing utilities for React                                                         |
| enzyme-adapter-react-16         | Adapter for Enzyme unit tests and assertions                                                              |
| eslint                          | Lints JavaScript                                                                                          |
| eslint-config-react-skoof       | ESLint shareable config for JLR coding standards                                                          |
| eslint-watch                    | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill            | Polyfill to support hot reloading in IE                                                                   |
| expect                          | Assertion library for use with Mocha                                                                      |
| express                         | Serves development and production builds                                                                  |
| extract-text-webpack-plugin     | Extracts CSS into separate file for production build                                                      |
| file-loader                     | Adds file loading support to Webpack                                                                      |
| istanbul                        | Code coverage analysis and reporting tool                                                                 |
| jsdom                           | In-memory DOM for testing                                                                                 |
| mocha                           | JavaScript testing library                                                                                |
| mochawesome                     | Reporting tool for Mocha tests                                                                            |
| nock                            | Mock HTTP requests for testing                                                                            |
| npm-run-all                     | Display results of multiple commands on single command line                                               |
| nyc                             | Command line runner for istanbul code coverage                                                            |
| open                            | Open app in default browser                                                                               |
| prettier-eslint                 | Automatic code formatting in line with ESLint rules every time a file is saved                            |
| react-addons-test-utils         | Adds React TestUtils                                                                                      |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                                                          |
| redux-mock-store                | Mock Redux store for testing                                                                              |
| rimraf                          | Delete files                                                                                              |
| style-loader                    | Add Style support to Webpack                                                                              |
| url-loader                      | Add url loading support to Webpack                                                                        |
| webpack                         | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware          | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware          | Adds hot reloading to webpack                                                                             |
