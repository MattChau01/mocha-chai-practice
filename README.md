# mocha-chai-practice

## setup
All tests will be ran inside the terminal.

To get started, first run the following to install Mocha and Chai as DevDependencies:

```
npm i mocha chai @types/mocha @types/chai ts-node typescript --save-dev           
```

Inside the `package.json`, make sure you have the following script:

```
"scripts": {
    "test": "mocha",
    "test-ts": "mocha --require ts-node/register ./test/**/*-ts.ts" 
  }
```

This is an example of how the `package.json` should look:

```
{
  "name": "mocha-chai-practice",
  "type": "module",
  "scripts": {
    "test": "mocha",
    "test-ts": "mocha --require ts-node/register ./test/**/*-ts.ts"
  },
  "devDependencies": {
    "@types/chai": "^4.3.5",
    "@types/mocha": "^10.0.1",
    "chai": "^4.3.7",
    "mocha": "^10.2.0",
    "ts-node": "^9.1.1",
    "typescript": "^4.1.5"
  }
}
```

## creating tests

- Create a new js file in `src` to test.
- Create a new js file labeled with `test` to describe tests to execute.
- In an open terminal, run the command `npm run test` for tests in JavaScript.
- If using TypeScript, run the command `npm run test-ts`.
- Results will be shown in the terminal whether the scripts passed or failed.
