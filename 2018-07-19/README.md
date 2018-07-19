# Lesson 16: React, part 2

Before we learn and practice more about React, let’s remember the big picture.

To add a new feature to a Web or mobile application, you might change any of the following:

* markup
* style
* data for state
* code for logic
* code for interaction is the subject of this lesson

## Get the practice files

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository

2. To get the new subdirectory which contains practice file for tonight: `git pull`

## Create a React application

1. Only if you **did not already** install for last lesson:

    * In Terminal: `npm install --global create-react-app`
    * In Chrome browser, go to `https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en`

2. Change to a directory which will be the **parent** of a new application directory

3. Create the new application directory: `create-react-app todo-react-2`

4. Change to the **child** directory: `cd todo-react-2`

5. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer: `yarn add --dev --exact json-server`
    * Otherwise: `npm install --save-dev --save-exact json-server`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `2018-07-19` subdirectory in your clone of the class repository

        In another Explorer or Finder window, paste the `db` subdirectory into the new `todo-react-2` directory

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `2018-07-19` subdirectory in your clone of the class repository

        In the second Explorer or Finder window, paste the files into the `src` subdirectory in the new `todo-react-2` directory, and then confirm that you are replacing some of the existing files

7. Delete the following files from the `src` subdirectory in the new `todo-react-2` directory:

    * `App.test.js`
    * `App.css`
    * `logo.svg`
    * `registerServiceWorker.js`

8. Open the `todo-react-2` directory in your code editor

9. Open the `package.json` file, edit as follows, and then save your changes:

    * For the development server to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a data server, paste a property within the `"scripts"` object: `"server": "json-server --port 3001 --watch ./db/db.json",`

10. In the first Command Prompt, Shell, or Terminal window, start the data server:

    * If `yarn` is installed on your computer: `yarn server`
    * Otherwise: `npm run server`

11. Start a second Command Prompt, Shell, or Terminal window, start the development server:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

12. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `Todo React 2` in the `index.html` file in `public` subdirectory of the application, and then save your change

## Review objectives from part 1

1. Describe structure and behavior as functions: given state, return elements.

2. Replace template languages with JavaScript for code and JSX for markup.

3. Build with components as if they are application-specific HTML elements.

4. Pass data down the “render tree” via props of descendant components.

## Learning objectives

1. Bind event handlers in class and function components.

2. Write callback functions to update the state of ancestor components.

3. Control the state of form elements.

4. Compose components to reuse code and separate concerns.

## 01 render item object as table row

Will 4 volunteers each explain one of the following:

* which kind of component is `TodoItem`
* what does `import React from 'react';` mean and where to find `react`
* what does `export default TodoItem;` mean
* how does `({item})` use object destructuring in function argument to get `item` prop from JSX element `<TodoItem item={item}/>`

```js
import React from 'react';

const TodoItem = ({item}) => (
  <tr>
  </tr>
);

export default TodoItem;
```

1. In your code editor, open the following files:

    * `index.js`
    * `01-App.js`
    * `01-TodoItem.js`

2. In the `index.js` file, replace `'./App';` with `'./01-App';`

3. After you save your change, inspect elements in browser tab

4. In the `01-TodoItem.js` file, add three `td` elements, each of which contains a child element:

    * first cell: an `input` element with `type="checkbox"` and `value={item.completed}` props
    * second cell: a `p` element whose child is a property of the item: `{item.text}`
    * third cell: a `button` element whose child is text: `Delete`

5. After you save your changes, inspect elements in browser tab

## 02 render array of item objects as table rows

```js
import React from 'react';

const TodoItems = ({items}) => null;

export default TodoItems;
```

1. In your code editor, open the following files:

    * `index.js`
    * `02-App.js`
    * `02-TodoItems.js`

2. In the `index.js` file, replace `'./01-App';` with `'./02-App';`

3. After you save your change, inspect elements in browser tab

4. In the `02-TodoItems.js` file, replace `null` with:

    * `table` element which has the following
    * `tbody` element which has the following child
    * `{items.map(item => <TodoItem key={item.id} item={item}/>)}`

5. After you save your changes, inspect elements in browser tab

## 03 render area to log off

Will 2 volunteers each explain one of the following:

* which kind of component is `LogOffArea`
* how does `const {doer, logOff} = this.props;` use object destructuring to get props from JSX element: `<LogOffArea doer={doer} logOff={logOff}/>`

```js
class LogOffArea extends React.Component {
  render() {
    const {doer, logOff} = this.props;
    return (
      <div className="logOff">
      </div>
    );
  }
}
```

1. In your code editor, open the following files:

    * `index.js`
    * `03-App.js`
    * `03-LogOffArea.js`

2. In the `index.js` file, replace `'./02-App';` with `'./03-App';`

3. After you save your change, inspect elements in browser tab

4. In the `03-LogOffArea.js` file, add to `render` method:

    * `span` element whose child is property of the doer: `{doer.name}`
    * `button` element which has prop `onClick={logOff}` and whose child is text: `Log off`

5. After you save your changes, inspect elements in browser tab

6. Switch to Console pane, and then click `Log off` button

7. In the `03-LogOffArea.js` file, to see an example of two level destructuring:

    * in assignment statement, replace `doer` with `doer: {name}`
    * in `span` element, replace `{doer.name}` with `{name}`

Will a volunteer say which JSX element prop has a different name than the corresponding HTML element attribute.

Will another volunteer explain step by step what happens in the code when you click the button.

## 04 render form to log on

The previous component could have been either a class or a function.

Because the following component has its own `state`, it must be a class component.

* Write a `constructor` function to initialize the `state` when React creates an instance of the component.
* Write a class method like `_onInput` or `_onSubmit` to handle each event
* Call `setState` whenever an event affects the internal state of this instance.
* Call a function from `props` to submit the form.
* Write a `render` function which has describes output with JSX for markup and JavaScript for logic

```js
class LogOnForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doerId: '',
      isValid: false,
    };
  }

  _onInput = event => {
    const doerId = event.target.value;
    const isValid = doerId.length !== 0;
    this.setState({
      doerId,
      isValid,
    });
  }

  _onSubmit = event => {
    event.preventDefault();
    this.props.logOn(this.state.doerId);
  }

  render() {
    return (
      <form name="logOn">
      </form>
    );
  }
}
```

1. In your code editor, open the following files:

    * `index.js`
    * `04-App.js`
    * `04-logic.js`
    * `04-LogOnForm.js`

2. In the `index.js` file, replace `'./03-App';` with `'./04-App';`

3. After you save your change, inspect elements in browser tab

4. In the `04-LogOnForm.js` file, edit in `render` method:

    * object destructuring assignment for `doerId` and `isValid` from `this.state`
    * add `onSubmit={this.onSubmit}` prop to opening `form` tag
    * add `input` element which has props ` type="text" value={doerId} onInput={this.onInput}`
    * add `button` element which has props `type="submit" disabled={!isValid}` and whose child is text: `Log on`

5. After you save your changes, inspect elements in browser tab

6. Switch to Console pane, type `lesson14` in box and then click `Log on` button

7. To add input validation to form, edit in the `04-LogOnForm.js` file:

    * above the class component, paste: `import {getMessageForId} from './04-logic';`
    * in `constructor` function, add `messageInvalid: '',` to object literal for `this.state`
    * in `_onInput` method, add `const messageInvalid = getMessageForId(doerId);` as new second line
    * in `_onInput` method, replace `doerId.length !== 0` with `doerId.length !== 0 && messageInvalid.length`
    * in `_onInput` method, add `messageInvalid,` to object literal in `setState` call
    * in `render` method, add `messageInvalid` to object destructuring from `this.state`
    * in `render` method, add `<p>{messageInvalid}</p>` after the `button` element

8. After you save your changes, type any of the characters for which the `getMessageForId` function (in the `04-logic.js` file) returns a non-empty string

Will a volunteer explain step by step what happens in the code when you edit input text.

Will another volunteer explain step by step what happens in the code when you click `Log on` or press `Enter` or `Return`

## 05 render either form or area in header

You can write ternary expression when the element to render depends on `props` or `state`.

In React, “it’s just JavaScript.”

```js
const Header = ({doer, isWaiting, logOn, logOff}) => (
  <header>
    <h1>To Do List</h1>
    {doer
      ? <LogOffForm doer={doer} logOff={logOff}/>
      : <LogOnForm logOn={logOn} isWaiting={isWaiting}/>
    }
  </header>
);
```

1. In your code editor, open the following files:

    * `index.js`
    * `05-App.js`
    * `05-fetch.js`
    * `05-Header.js`
    * `04-LogOnForm.js`

2. In the `index.js` file, replace `'./04-App';` with `'./05-App';`

3. After you save your change, inspect elements in browser tab

4. In the `05-App.js` file, edit in `render` method:

    * above the class component, paste: `import {fetchGetDoer} from './05-fetch';`
    * below `this.setState` call in `logOn` method of `App` class, paste:

        ```js
        fetchGetDoer(id).then(doer => {
          this.setState({
            doer,
            isWaiting: false,
          });
        }).catch(error => {
          this.setState({
            isWaiting: false,
            messageFailed: error.message,
          });
        });
        ```

5. In the `04-LogOnForm.js` file, edit in `render` method:

    * paste as new first line: `const {isWaiting, messageFailed} = this.props;`
    * in `button` element, replace `disabled={!isValid}` with `disabled={!isValid || isWaiting}`
    * in `p` element, replace `{messageInvalid}` with `{messageInvalid || messageFailed}`

6. Switch to Console pane and also notice requests in Terminal which runs your data server:

    * type `lesson14` in box, and then click `Log on` button
    * click `Log off` button
    * type `lesson13` in box, and then click `Log on` button

Will a volunteer explain step by step what happens in the code when you click `Log off`

Will another volunteer explain step by step what happens when you click `Log on`

    * in `_onSubmit` method in the `05-App.js` file, and then
    * in `render` method in the `05-App.js` file, and then
    * in `render` method in the `04-LogOnForm.js` file

## 06 render form to add new item

1. In your code editor, open the following files:

    * `index.js`
    * `06-App.js`
    * `06-fetch.js`
    * `06-logic.js`
    * `06-NewItemForm.js`

2. In the `index.js` file, replace `'./05-App';` with `'./06-App';`

3. After you save your change, inspect elements in browser tab

4. In the `06-App.js` file, edit in `render` method:

    * above the class component, paste: `import {fetchPostItem} from './06-fetch';`
    * below `this.setState` call in `addItem` method of `App` class, paste:

        ```js
        fetchPostItem({doerId, completed: false, text}).then(item => {
          this.setState({
            isWaiting: false,
            keyItemForm: item.id,
          });
        }).catch(error => {
          this.setState({
            isWaiting: false,
            messageFailed: error.message,
          });
        });
        ```

5. In the `06-NewItemForm.js` file,  in `_onSubmit` method, paste as new second line: `this.props.addItem(this.state.text);`

6. In the `05-NewItemForm.js` file, edit in `render` method:

    * add object destructuring assignment for `isWaiting` and `messageFailed` from `this.props`
    * in `button` element, replace `disabled={!isValid}` with `disabled={!isValid || isWaiting}`
    * in `p` element, replace `{messageInvalid}` with `{messageInvalid || messageFailed}`

7. Switch to Console pane and also notice requests in Terminal which runs your data server:

    * type text of new uncompleted item in box, and then click `Add` button
    * look for new item object at the end of `db/db.json` file

Will a volunteer explain `fetchPostItem` function in the `06-fetch.js` file

Will another volunteer explain step by step what happens when you click `Add`

    * in `_onSubmit` method in the `06-NewItemForm.js` file, and then
    * in `_addItem` method in the `06-App.js` file, and then
    * in `render` method in the `06-App.js` file, and then
    * in `render` method in the `06-NewItemForm.js` file

## 07 render table with event handlers

1. In your code editor, open the following files:

    * `index.js`
    * `07-App.js`
    * `07-fetch.js`
    * `07-logic.js`
    * `02-TodoItems.js`
    * `01-TodoItem.js`

2. In the `index.js` file, replace `'./06-App';` with `'./07-App';`

3. After you save your change, inspect elements in browser tab

4. In the `07-App.js` file, add `toggleCompleted={this._toggleCompleted}` and `deleteItem={this._deleteItem}` to `TodoItems` element in `render` method

5. In the `02-TodoItems.js` file, edit:

    * add `toggleCompleted` and `deleteItem` to object destructuring in function argument
    * add `toggleCompleted={toggleCompleted} deleteItem={deleteItem}` to props in `TodoItem` element

6. In the `01-TodoItem.js` file, edit:

    * add `toggleCompleted` and `deleteItem` to object destructuring in function argument
    * add `className={item.completed ? 'completed': 'uncompleted'}` prop to opening tag of `tr` element
    * add `checked={item.completed} onChange={toggleCompleted.bind(null, item.id)}` to `input` element
    * replace `button` element with `{item.completed || <button onClick={deleteItem.bind(null, item.id)}>Delete</button>}`

7. Switch to Console pane and also notice requests in Terminal which runs your data server:

    * click check box to mark an item as completed
    * click check box again to mark the item as uncompleted
    * click `Delete` button of an uncompleted item to remove it

Will a volunteer explain `fetchPatchCompleted` function in the `07-fetch.js` file

Will another volunteer explain step by step what happens when you click a check box:

    * at `onChange` prop in the `01-TodoItem.js` file, and then
    * in `_toggleCompleted` method in the `07-App.js` file, and then
    * in `render` method in the `07-App.js` file, and then
    * in output elements in the `02-TodoItems.js` file
    * in output elements in the `01-TodoItem.js` file

## 08 test pure logic

1. In your code editor, open the following files:

    * `07-logic.js`
    * `08-logic.test.js`

2. In another Command Prompt, Shell, or Terminal window, type one of the following:

    * If `yarn` is installed on your computer: `yarn test 08-logic`
    * Otherwise: `npm test 08-logic`

3. In the `08-logic.test.js` file, apply the example in the first `describe` function call to define data, and then write 3 `it` function calls for tests in the second `describe` function call of `findItem` (see the `07-logic.js` file)

4. In the `08-logic.test.js` file, write a third `describe` function call, which define data, and then write 2 `it` function calls for tests of `toggleCompleted` (see the `07-logic.js` file)

## Homework

1. Read [Handling Events](https://reactjs.org/docs/handling-events.html) and [Forms](https://reactjs.org/docs/forms.html) at reactjs.org

2. Read [React is JavaScript](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/) by Robin Wieruch

3. Find data for your project in [List of public JSON APIs](https://github.com/toddmotto/public-apis) by Todd Motto
