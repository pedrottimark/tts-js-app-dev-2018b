# Redux, part 2

## Get the practice files

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository

2. To get the new subdirectory which contains practice file for tonight: `git pull`

## Create a React application

1. Only if you **did not already** install:

    * In Terminal: `npm install --global create-react-app`
    * In Chrome browser, go to `https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en`

2. Change to a directory which will be the **parent** of a new application directory

3. Create the new application directory: `create-react-app healthy-redux`

4. Change to the **child** directory: `cd healthy-redux`

5. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer: `yarn add --dev --exact react-redux redux redux-logger redux-thunk`
    * Otherwise: `npm install --save-dev --save-exact react-redux redux redux-logger redux-thunk`

6. To install devDependencies, do one of the following:

    * If `yarn` is installed on your computer: `yarn add --dev --exact json-server`
    * Otherwise: `npm install --save-dev --save-exact json-server`

7. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `2018-08-02` subdirectory in your clone of the class repository

        In another Explorer or Finder window, paste the `db` subdirectory into the new `healthy-redux` directory

    * In the first Explorer or Finder window, copy the `src` subdirectory in the `2018-08-02` subdirectory in your clone of the class repository

        In the second Explorer or Finder window, delete the existing `src` subdirectory from the new `healthy-redux` directory, and then paste the `src` subdirectory in the new `healthy-redux` directory

8. Open the `healthy-redux` directory in your code editor

9. Open the `package.json` file, edit as follows, and then save your changes:

    * For the development server to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a data server, paste a property within the `"scripts"` object: `"server": "json-server --port 3001 --delay 2000 --watch ./db/db.json",`

10. In the first Command Prompt, Shell, or Terminal window, start the data server:

    * If `yarn` is installed on your computer: `yarn server`
    * Otherwise: `npm run server`

11. Start a second Command Prompt, Shell, or Terminal window, start the development server:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

12. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `Healthy Redux` in the `index.html` file in `public` subdirectory of the application, and then save your change

## Overview of Healthy Redux example application

Inspired by information from [The Nutrition Source](https://www.hsph.harvard.edu/nutritionsource/) at Harvard T.H. Chan School of Public Health.

Limitations compared to previous example with React Router:
* Instead of home page and 6 food pages, only one page for fluids.
* Instead of history of previous 7 days, only portions for today.

Improvements compared to previous example:
* Instead of click a portion to delete it, click to adjust quantity (including 0 to delete).
* While form is open or fetch request is pending, display that food or portion as disabled.

The application has four areas:
* a water glass drawing and external links at the lower edge
* a message appears at the upper edge if there is an error
* portions at the upper left: click a portion to open a form and change its quantity
* fluids at the right: click a fluid to add (or increment) a portion of it

## Redux

[Redux](https://redux.js.org/introduction/motivation) attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the [three principles](https://redux.js.org/introduction/threeprinciples) of Redux:

* The state of your whole application is stored in an object tree within a single **store**.

* The only way to change the state is to emit an **action**, an object describing what happened.

* To specify how the state tree is transformed by actions, you write pure **reducers**.

For diagrams of concepts, see [When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f)

### state

> In Redux, all the application **state** is stored as a single object. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

### actions

> **Actions** are payloads of information that send data from your application to your store. They are the *only* source of information for the store.

An action object has a `type` property and any other properties needed to describe what happened.

### reducer

> The **reducer** takes the previous state and an action, and returns the next state.

> The reducer must be pure. **Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.**

See `src/reducers` subdirectory for reducer functions.

### store

> The **store** is the object that brings them together. The store has the following responsibilities:

* Holds application state
* Allows access to state via `getState()`
* Allows state to be updated via `dispatch(action)`
* Registers listeners via `subscribe(listener)`
* Handles unregistering of listeners via the function returned by `subscribe(listener)`

Instead of the calling store methods directly, we will use the `react-redux` package.

* Analogy for passing **props**: To withdraw small amount of cash from drive-up ATM machine, passenger hands card to driver.
* Analogy for passing through via **context**: To deposit large amount of cash from farthest drive-through lane, teller sends pneumatic tube (so people do not pass cash from car to car).

> You’ll only have a **single store** in a Redux application.

> When you want to split your data handling logic, you'll use **reducer composition** instead of many stores.

See `src/reducers/index.js` for `combineReducers` function.

## React Redux

[React bindings for Redux](https://redux.js.org/basics/usagewithreact) embrace the idea of separating presentational and container components.

* Presentational: How things **look** (markup, styles). Read data from props. Invoke callbacks from props.

* Container: How things **work** (data fetching, state updates). Subscribe to Redux state. Dispatch Redux actions

## Redux Logger

The [redux-logger](https://www.npmjs.com/package/redux-logger) package displays actions in the console.

## Redux Thunk

The [redux-thunk](https://www.npmjs.com/package/redux-thunk) package:

* Is middleware which allows you to write action creators that return a **function** instead of an action.
* The thunk can be used to **delay** the dispatch of an action, or to dispatch only if a certain condition is met.
* The **inner function** receives the store methods dispatch and getState as parameters.

## Look with your eyes

1. In the `src/index.js` file, see where you **provide** the Redux store to the application

2. In the `src/App.js` file, see how to **connect** a component to the Redux store:

    * `mapStateToProps` is a function which given properties from the Redux store, returns **props** for the component, which uses them in its `render` method (in this example, keys and values are the same in store and component)

    * `mapDispatchToProps` is an object whose properties are action creator functions which are bound to the `dispatch` method of the Redux store and included as **props** of the component, which calls it in its `componentDidMount` method

    * `export default connect(mapStateToProps, mapDispatchToProps)(App);` exports the connected component

    * Will a volunteer explain conditional and expression in `render` method: `{!isGetting && (…)}`

3. In the `src/actions.js` file, see the `getFoodsPortions` function which calls `dispatch`:

    * with `{type: 'FETCH_GET_WAITING'}` action **before** it calls `fetch`
    * with `{type: 'FETCH_GET_SUCCESS', …}` action if promise is fulfilled
    * with `{type: 'FETCH_GET_FAILURE', …}` action if promise is rejected

4. In the `src/reducers/isGetting.js` file, see property of state while promise is pending (determines whether `section` is displayed in `render` method of connected `App` component)

5. In the `src/reducers/message.js` file, see property of state when promise is rejected (displayed in `render` method of connected `App` component)

6. In the `src/App.js` file, see that it doesn’t provide props to `Portions` and `Foods` elements (that is, it does not apply the [“lifting state up”](https://reactjs.org/docs/lifting-state-up.html) pattern because the data is in Redux store instead of component state)

## Practice with your hands

1. Apply the example of `src/App.js` file in the `src/Foods.js` file to connect component to Redux store:

    * delete last line, and then `/*` and `*/` comments
    * map state to props: `foods`, `isFetchingIds`, `isRenderingFormId`
    * map dispatch to props: `addFood`
    * export connected component

2. In the `src/actions.js` file apply the pattern of `dispatch` function call with action object `{type: 'FETCH_PUT_FAILURE',, …}` at the two `// TODO` comments

3. In the `src/reducers/portions.js` file, write pure callback functions:

    * for `case 'FETCH_PUT_SUCCESS'` assuming that `action.portion` is the new updated object, delete surrounding comment, and then replace `TODO` with JavaScript expression

    * for `'FETCH_DELETE_SUCCESS'` assuming that `action.portionId` identifies the portion to delete, , delete surrounding comment, and then replace `TODO` with JavaScript expression

## Resources

* [When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) 30 free lessons in 121 minutes = 4 minute average
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) 27 free lessons in 137 minutes = 5 minute average
