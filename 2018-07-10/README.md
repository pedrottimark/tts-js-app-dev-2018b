# JavaScript tools: webpack and Jest

## Get the practice files

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository
2. To get the new subdirectory which contains practice file for tonight: `git pull`

In an Explorer or Finder window, copy the `2018-07-10` subdirectory:

* from your local `tts-js-app-dev-2018b` directory
* to your working `tts-js-working-copy` directory

In Command Prompt or Terminal window:

1. Change to `2018-07-10` subdirectory in your working `tts-js-working-copy` directory
2. `npm install` or if your computer has yarn, then `yarn`
3. `npm start` or `yarn start`

## webpack

A module bundler helps you achieve two goals which would otherwise contradict each other:

* Organize files in small modules when you develop an application.
* Minimize the number of script, style, and image files that browsers need to download when people use an application.

[webpack](https://webpack.js.org) builds a dependency graph [from top down] that includes every module your application needs, then packages all of those modules into one or more bundles.

As a contrast, both `grunt` or `gulp` process files by type [from bottom up].

Let’s watch [Webpack from First Principles](https://youtu.be/WQue1AN93YU) by Glen Maddern (14 minutes)

To add devDependencies to `package.json` file, I used one of the following:

* `npm install --save-dev webpack webpack-cli css-loader file-loader style-loader url-loader`
* `yarn add --save-dev webpack webpack-cli css-loader file-loader style-loader url-loader`

## Purchase Pleasing Produce

This lesson divides the application into separate parts so we can review `fetch` calls:

* Log on as a returning purchaser.
* Sign up as a new purchaser.
* Enter the PLU code of a product.
* Enter the quantity of a product to purchase.
* Change the quantity of a product to purchase.
* Delete a purchase object.

This lesson changes the subdirectories:

* `db` subdirectory contains the `00-db.json` file
* `public` subdirectory contains `.html` files and bundled `.js` files
* `src` subdirectory contains `00-app.css` style file, `Emoji_u1f957.svg` image file, and module `.js` files
* `2018-07-10` directory contains `package.json` and webpack `.config.js` files

In your code editor, open the `package.json` file and find the `"start"` command in the `"scripts"` object.

In addition to data requests, the `json-server` package [serves static files](https://github.com/typicode/json-server#static-file-server) from the `public` subfolder by default.

## 01-get-purchaser

Log on as a returning purchaser.

1. In your code editor, open the following files:

    * `src/01-fetch.js` imports from 1 file and exports `fetchGetReturningPurchaser` function
    * `src/01-index.js` imports from 3 files
    * `01-webpack.config.js` specifies **entry** file `./src/01-index.js` and **output** file `01-bundle.js` in the `public` subdirectory
    * `public/01-get-purchaser.html` has only one `script` element for the output bundle

2. In another Command Prompt or Terminal window, do one of the following:

    * `npm run build -- --config 01-webpack.config.js`
    * `yarn build --config 01-webpack.config.js`

3. In a Web browser, open a new tab, and then type `localhost:3000/01-get-purchaser.html` in address bar, and then press Enter or Return

4. Type an account name in the box, and then either click `Log on` or press Enter or Return:

    * If the name is not in the `db/00-db.json` file, then the application displays `Not Found`
    * If the name is in the `db/00-db.json` file, then the application displays a `Log off` button

5. If you click the `Log off` button, then the application displays the form to log on

Will 2 volunteers each answer one of the following:

* Say which HTTP verb is the default method for a `fetch` call.
* Explain purpose of `convertToJSON` function defined in the `src/00-convertToJSON.js` file and called in the `src/01-fetch.js` file.

## 02-post-purchaser

Sign up as a new purchaser.

1. In your code editor, open the following files:

    * `src/02-fetch.js` imports from 1 file and exports `fetchPostNewPurchaser` function
    * `src/02-index.js` imports from 3 files
    * `02-webpack.config.js` specifies **entry** file `./src/02-index.js` and **output** file `02-bundle.js` in the `public` subdirectory
    * `public/02-post-purchaser.html` has only one `script` element for the output bundle

2. In a Command Prompt or Terminal window, do one of the following:

    * `npm run build -- --config 02-webpack.config.js`
    * `yarn build --config 02-webpack.config.js`    

3. In a Web browser, open a new tab, and then type `localhost:3000/02-post-purchaser.html` in address bar, and then press Enter or Return

4. Type an account name in the box, and then either click `Sign up` or press Enter or Return:

    * If the name is in the `db/00-db.json` file, then the application displays `Internal Server Error`
    * If the name is not in the `db/00-db.json` file, then the application displays a `Log off` button

5. If you click the `Log off` button, then the application displays the form to sign up

Will 2 volunteers each answer one of the following:

* Say which HTTP status code for server error.
* Explain `method`, `headers`, `body` properties of configuration object in `02-fetch.js` file.

## 03-get-product

Enter the PLU code of a product.

For our first **challenge**, decide who will start with each role.

1. Both: In your code editor, open the following files:

    * `src/03-fetch.js`
    * `src/03-index.js`

2. Pilot: Copy the `02-webpack.config.js` file to make a new `03-webpack.config.js` file

3. Pilot: In your code editor, open the `03-webpack.config.js` file, and then:

    * Edit the **entry** file to become `./src/03-index.js`
    * Edit the **output** file to become `03-bundle.js` in the `public` subdirectory

4. Pilot: In a Command Prompt or Terminal window, do one of the following:

    * `npm run build -- --config 03-webpack.config.js`
    * `yarn build --config 03-webpack.config.js`

5. Both: In a Web browser, open a new tab, and then type `localhost:3000/03-get-product.html` in address bar, and then press Enter or Return

6. Navigator: Tell pilot how to complete `fetchGetProduct` function in `src/03-fetch.js` file

7. Pilot: In `src/03-index.js` file:

    * Add `fetchGetProduct` to `import` statement at first `TODO` comment
    * Delete `/*` and `*/` at second `TODO`

8. Pilot: Refresh tab, type a code in the box, and then either click `Enter` or press Enter or Return:

    * If the product is in the `db/00-db.json` file, then the application displays its description
    * If the product is not in the `db/00-db.json` file, then the application displays `Not Found`

## 04-post-purchase

Enter the quantity of a product to purchase.

For our next **challenge**, change roles.

1. Both: In your code editor, open the following files:

    * `src/04-fetch.js`
    * `src/04-index.js`

2. Pilot: Copy the `02-webpack.config.js` file to make a new `04-webpack.config.js` file

3. Pilot: In your code editor, open the `04-webpack.config.js` file, and then:

    * Edit the **entry** file to become `./src/04-index.js`
    * Edit the **output** file to become `04-bundle.js` in the `public` subdirectory

4. Pilot: In a Command Prompt or Terminal window, do one of the following:

    * `npm run build -- --config 04-webpack.config.js`
    * `yarn build --config 04-webpack.config.js`

5. Both: In a Web browser, open a new tab, and then type `localhost:3000/04-post-purchase.html` in address bar, and then press Enter or Return

6. Navigator: Tell pilot how to complete `fetchPostPurchase` function in `src/04-fetch.js` file

7. Pilot: In `src/04-index.js` file:

    * Add `fetchPostPurchase` to `import` statement at first `TODO` comment
    * Delete `/*` and `*/` at second `TODO`

8. Pilot: Refresh tab, type a quantity in the box, and then either click `Enter` or press Enter or Return:

    * In the `db/00-db.json` file, the application appends an object to `"purchases"` array

## 05-patch-purchase

Change the quantity of a product to purchase.

For our next **challenge**, change roles.

1. Both: In your code editor, open the following files:

    * `src/05-fetch.js`
    * `src/05-index.js`

2. Pilot: Copy the `02-webpack.config.js` file to make a new `05-webpack.config.js` file

3. Pilot: In your code editor, open the `05-webpack.config.js` file, and then:

    * Edit the **entry** file to become `./src/05-index.js`
    * Edit the **output** file to become `05-bundle.js` in the `public` subdirectory

4. Pilot: In a Command Prompt or Terminal window, do one of the following:

    * `npm run build -- --config 05-webpack.config.js`
    * `yarn build --config 05-webpack.config.js`

5. Both: In a Web browser, open a new tab, and then type `localhost:3000/05-patch-purchase.html` in address bar, and then press Enter or Return

6. Navigator: Tell pilot how to complete `fetchPatchPurchase` function in `src/05-fetch.js` file

7. Pilot: In `src/05-index.js` file:

    * Add `fetchPatchPurchase` to `import` statement at first `TODO` comment
    * Delete `/*` and `*/` at second `TODO`

8. Pilot: Refresh tab, type a quantity in the box, and then either click `Enter` or press Enter or Return:

    * In the `db/00-db.json` file, the application updates `"quantity"` property of an object in `"purchases"` array

## 06-delete-purchase

Delete a purchase object.

For our next **challenge**, change roles.

1. Both: In your code editor, open the following files:

    * `src/06-fetch.js`
    * `src/06-index.js`

2. Pilot: Copy the `02-webpack.config.js` file to make a new `06-webpack.config.js` file

3. Pilot: In your code editor, open the `06-webpack.config.js` file, and then:

    * Edit the **entry** file to become `./src/06-index.js`
    * Edit the **output** file to become `06-bundle.js` in the `public` subdirectory

4. Pilot: In a Command Prompt or Terminal window, do one of the following:

    * `npm run build -- --config 06-webpack.config.js`
    * `yarn build --config 06-webpack.config.js`

5. Both: In a Web browser, open a new tab, and then type `localhost:3000/06-delete-purchase.html` in address bar, and then press Enter or Return

6. Navigator: Tell pilot how to complete `fetchDeletePurchase` function in `src/06-fetch.js` file

7. Pilot: In `src/06-index.js` file:

    * Add `fetchDeletePurchase` to `import` statement at first `TODO` comment
    * Delete `/*` and `*/` at second `TODO`

8. Pilot: Refresh tab, and then either click `Delete` at right of a row

    * In the `db/00-db.json` file, the application delete object in `"purchases"` array

## Delightful testing with Jest

* Build confidence that JavaScript code works correctly.
* Balance cost and benefit.
* Minimize rework on tests if you refactor code.

## Minimal configuration

[Jest](https://jestjs.io/) can run any or all test files in a project with the following patterns:

* any `*.test.js` files
* any `*.spec.js` files
* any `*.js` in any `__tests__` directory

To use ECMAScript modules and object rest-spread, the `package.json` file contains Babel configuration:

```js
"babel": {
  "plugins": [
    "transform-es2015-modules-commonjs",
    "transform-object-rest-spread"
  ]
},
```

To add devDependencies to `package.json` file, I used one of the following:

* `npm install --save-dev jest babel-jest babel-core babel-plugin-transform-es2015-modules-commonjs babel-plugin-transform-object-rest-spread`
* `yarn add --save-dev jest babel-jest babel-core babel-plugin-transform-es2015-modules-commonjs babel-plugin-transform-object-rest-spread`

## Understand test structure and assertions

Jest has similar structure as Jasmine and Mocha.

It includes [expect](https://jestjs.io/docs/en/expect) for assertions instead of Chai.

The assertions are also known as [matchers](https://jestjs.io/docs/en/using-matchers.html)

In the `src/07-delete-purchase.test.js` file:

1. Notice the structure:

    * It is similar to Jasmine or Mocha: `describe('deletePurchase', () => { … });`
    * It contains some test data: `const purchase0 = {id: 0};` and so on
    * It contains one or more `it` or `test` cases

2. Read an individual test:

    * If you can, describe behavior: `it('deletes the only purchase', () => { … });`
    * Otherwise, `test('noun phrase', () => { … });`

3. A test contains an assertion about a **received** and **expected** value:

    * `expect(received).toBe(expected);` is **strict equality** like `===` using [`Object.js`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
    * `expect(received).toEqual(expected);` matches **equivalent** values
    * `expect(received).toMatchObject(expected);` matches a **subset** of properties

## Test-driven Development (also known as TDD)

Apply it as much as you can. Argue about it as little as you can :)

1. Write a “fail-first” test
2. Write code to make the test pass
3. If a test fails after changes to code, decide is it **regress** or **progress**

## 07-delete-purchase

For our last **challenge**, change roles after each editing step of `.test.js` file.

1. Both: In your code editor, open the following files:

    * `src/06-logic.js`
    * `src/07-delete-purchase.test.js`

2. Both: In a Command Prompt or Terminal window:

    * `npm test -- 07-delete-purchase`
    * `yarn test 07-delete-purchase`

3. Both collaboratively:

    * Look at `findIndexPurchase` function in `06-logic.js` file
    * Add `describe('findIndexPurchase', () => {});` at end of `.test.js` file

4. Add `it('finds index that is in array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 3
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

5. Add `it('does not find index that is not in array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 3
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

6. Both collaboratively:

    * Look at `addId` function in `06-logic.js` file
    * Add `describe('addId', () => {});` at end of `.test.js` file
    * Pilot: After you have saved your changes, run the tests.

7. Add `it('adds id to empty array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 6
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

8. Add `it('adds id to non-empty array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 6
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

9. Both collaboratively:

    * Look at `removeId` function in `06-logic.js` file
    * Add `describe('removeId', () => {});` at end of `.test.js` file
    * Pilot: After you have saved your changes, run the tests.

10. Add `it('removes id that does exist in array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 9
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

11. Add `it('does not remove id that does not exist in array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 9
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

12. Both collaboratively:

    * Look at `hasId` function in `06-logic.js` file
    * Add `describe('hasId', () => {});` at end of `.test.js` file
    * Pilot: After you have saved your changes, run the tests.

13. Add `it('returns false if id is not in array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 12
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

14. Add `it('returns true is id is in array', () => {/* TODO */});`

    * Pilot: Copy and paste preceding code into body of describe block from step 12
    * Navigator: Tell pilot what initial data, `expected` value, and `expect` assertion to write
    * Pilot: After you have saved your changes, run the tests.

## Homework

1. Watch again [Webpack from First Principles](https://youtu.be/WQue1AN93YU) by Glen Maddern (14 minutes)

2. Read some documentation pages about Webpack:

    * [Getting Started](https://webpack.js.org/guides/get-started/)
    * [Entry Points](https://webpack.js.org/concepts/entry-points/)
    * [Output](https://webpack.js.org/concepts/output/)
    * [Loaders](https://webpack.js.org/concepts/loaders/)
    * [Plugins](https://webpack.js.org/concepts/plugins/)

3. Watch [Write tests. Not too many. Mostly integration.](https://www.youtube.com/watch?v=Fha2bVoC8SE) by Kent C. Dodds (17 minutes)

4. Watch [Jest Snapshots and Beyond](https://www.youtube.com/watch?v=HAuXJVI_bUs) by Rogelio Guzman (26 minutes)

5. Visit some documentation pages about Jest:

    * Scan [Expect](https://facebook.github.io/jest/docs/en/expect.html) to see the assertions
    * Read [Testing Asynchronous Code](https://facebook.github.io/jest/docs/en/asynchronous.html)
    * Skim [An Async Example](https://facebook.github.io/jest/docs/en/tutorial-async.html)
