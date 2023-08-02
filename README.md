# mocha-chai-practice

## setup
All tests will be ran inside the terminal.

To get started, first run the following to install Mocha and Chai as DevDependencies:

```
npm i --save-dev mocha chai
```

Inside the `package.json`, make sure you have the following script:

```
"scripts": {
    "test": "mocha"
  }
```

## creating tests

- Create a new js file in `src` to test.
- Create a new js file labeled with `test` to describe tests to execute.
- In an open terminal, run the command `npm run test`
- Results will be shown in the terminal whether the scripts passed or failed.