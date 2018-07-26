# React Router

## Get the practice files

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository

2. To get the new subdirectory which contains practice file for tonight: `git pull`

## Create a React application

1. Only if you **did not already** install for last lesson:

    * In Terminal: `npm install --global create-react-app`
    * In Chrome browser, go to `https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en`

2. Change to a directory which will be the **parent** of a new application directory

3. Create the new application directory: `create-react-app healthy-eating``

4. Change to the **child** directory: `cd healthy-eating`

5. To install dependencies, do one of the following:

    * If `yarn` is installed on your computer: `yarn add --dev --exact json-server react-document-title react-router-dom`
    * Otherwise: `npm install --save-dev --save-exact json-server react-document-title react-router-dom`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `2018-07-26` subdirectory in your clone of the class repository

        In another Explorer or Finder window, paste the `db` subdirectory into the new `healthy-eating` directory

    * In the first Explorer or Finder window, copy the `src` subdirectory in the `2018-07-26` subdirectory in your clone of the class repository

        In the second Explorer or Finder window, delete the existing `src` subdirectory from the new `healthy-eating` directory, and then paste the `src` subdirectory in the new `healthy-eating` directory

7. Open the `healthy-eating` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * For the development server to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a data server, paste a property within the `"scripts"` object: `"server": "json-server --port 3001 --watch ./db/db.json",`

9. In the first Command Prompt, Shell, or Terminal window, start the data server:

    * If `yarn` is installed on your computer: `yarn server`
    * Otherwise: `npm run server`

10. Start a second Command Prompt, Shell, or Terminal window, start the development server:

    * If `yarn` is installed on your computer: `yarn start`
    * Otherwise: `npm start`

11. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `Healthy Eating` in the `index.html` file in `public` subdirectory of the application, and then save your change

12. Click each of the tabs from left to right and notice URL in address bar of browser

## Overview of Healthy Eating example application

Inspired by information from the Harvard T.H. Chan School of Public Health:

* [Healthy Eating Plate](https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/)
* [Kid’s Healthy Eating Plate](https://www.hsph.harvard.edu/nutritionsource/kids-healthy-eating-plate/)
* [The Nutrition Source](https://www.hsph.harvard.edu/nutritionsource/)

Because variety in foods is as important as quantity in portions, if you can see what you have eaten in the past 7 days, then you might make healthier choices in what you eat today.

For the `/` route, the home page displays the Healthy Eating Plate diagram so you can see something while the single-page application gets foods and portions from the server.

For 6 categories of foods, there are tabs to switch pages and corresponding routes:

* `/vegetables`
* `/fruits`
* `/grains`
* `/protein`
* `/oils`
* `/fluids`

A category page displays:

* at the right a list of foods in that category: italic font style means **limit** the quantity and strikethrough means **avoid** the food
* at the lower left an **external link** to The Nutrition Source and 3 lines of advice.
* at the upper left a table of portions for today and the previous 7 days

To add a portion, click a food in the list at the right.

* If that is the first portion for today, the application makes a `POST` request to the server, and then adds the food to the first row of the table
* If that isn’t the first portion for today, the application makes a `PATCH` request to the serve, and then increments the number of servings in the first row of the table (which is sorted with the most servings at the beginning of the list, like **water** on the **fluids** page :)

If you make add a first portion by mistake, and then click a portion in the first row of the table, the application makes a `DELETE` request to the server; but the application doesn’t provide an easy way to decrement the number of servings :(

When you go to a category page, the browser tab displays the category in the tab. Therefore, if you right-click the back or forward buttons at the left of the address bar in the browser, you can see in the history which pages you have visited. Therefore, you can quickly move back and forward to pages (for example, in Chrome on macOS, hold down the `command` key while you press the left or right arrow keys).

## Overview of React Router

[React Router](https://reacttraining.com/react-router/) is a collection of navigation components that **compose declaratively** with application-specific components.

Think about routing as **user interface**, not as static configuration. For example, the set of routes might change to provide dynamic user experience when people rotate mobile devices.

* In **web** applications, import components from the `react-router-dom`
* In **React Native** applications, import components from the `react-router-native`

React Router provides three types of [components](https://reacttraining.com/react-router/web/guides/basic-components).

### router components

[`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) uses HTML5 [`history`](https://developer.mozilla.org/en-US/docs/Web/API/History) to keep user interface and URL in sync.

If an application also uses Redux, then `BrowserRouter` is child of `Provider` and parent of `App` component. React Router and Redux both use React [context](https://reactjs.org/docs/context.html) to pass data through the component tree without having to pass props down manually at every level.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
```

### route matching components

[`Route`](https://reacttraining.com/react-router/web/api/Route) compares `pathname` of the current `location` to its `path` prop, and then:

* if it matches, render content
* if it doesn’t match, render `null`

`Route` renders content by either of the following props:

* `component` prop refers to a component function or class, which receives [`match`](https://reacttraining.com/react-router/web/api/match), [`location`](https://reacttraining.com/react-router/web/api/location), [`history`](https://reacttraining.com/react-router/web/api/history) as its props

    ```js
    <Route exact path="/" component={Home}/>
    ```

* `render` prop has an inline function closure if a component needs values of in-scope variables as props, or either of the following scenarios:

    ```js
    // convenient inline rendering without component function or class
    <Route path="/home" render={() => <div>Home</div>}/>
    ```

    ```js
    // provide data value and event callback as props
    <Route path="/mypath" render={() => <MyComponent aKey={aValue} onClick={this._onClick}/>}/>
    ```

[`Switch`](https://reacttraining.com/react-router/web/api/Switch) renders only the first `Route` or `Redirect` that matches the current `location`

```js
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
</Switch>
```

### navigation components

[`Link`](https://reacttraining.com/react-router/web/api/Link) component renders an `a` element

```js
<Link to='/courses?sort=name'>courses</Link>
```

[`NavLink`](https://reacttraining.com/react-router/web/api/NavLink) can style itself as `active` when its `to` prop matches the current `location`

```js
<nav>
  <ul>
    <li>
      <NavLink to="/">Home</Link>
    </li>
    <li>
      <NavLink to="/about">About</Link>
    </li>
    <li>
      <NavLink to="/topics">Topics</Link>
    </li>
  </ul>
</nav>
```

To force navigation, render [`Redirect`](https://reacttraining.com/react-router/web/api/Redirect) with a `to` prop

```js
<Redirect
  to={{
    pathname: "/login",
    state: { from: props.location }
  }}
/>
```

## Review React

If a component renders multiple children, you can enclose then in `<React.Fragment>` instead of a `div` element:

```js
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
      </React.Fragment>
    );
  }
}
```

If a class component needs to fetch data from the server, define a `ComponentDidMount` lifecycle method:

```js
componentDidMount() {
  Promise.all([fetchGetFoods(), fetchGetPortions()]).then(([foods, portions]) => {
    // Given array of all foods, return arrays of foods whose indexes correspond to categories.
    const foodsArray = categories.map(category => filterFoodsByCategory(foods, category));

    // Given array of all portions, return arrays of arrays of portions.
    // The first level of indexes correspond to categories.
    // The second level of indexes correspond to days from 0 for Today to 7 for a week ago.
    const portionsArray = categories.map(category => {
      const portionsByCategory = filterPortionsByCategory(portions, category);
      return days.map((days, index) => filterPortionsByIndex(portionsByCategory, index));
    });

    this.setState({
      foodsArray,
      portionsArray,
    })
  }).catch(error => {
    console.error(error.message);
  });
}
```

Whenever a component needs logic to render output, write it in JavaScript:

```js
{`${id.replace(/_/g, ' ')}${quantity === 1 ? '' : ' ' + quantity}`}
```

Will 3 volunteers each explain one of the following:

* what is the text string if `id` is `'Brussels_sprouts'` and `quantity` is `1`
* what is the text string if `id` is `'olive_oil'` and `quantity` is `2`
* which array method do you call to render an array of objects

## Practice adding a Route component

1. Open the `Main.js` file in your code editor
2. Find the `</Switch>` tag in the `render` method near the end of the file
3. In the address bar of the `Healthy Eater` browser tab, replace edit `localhost:3000/unexpected` in address bar of browser tab and will a volunteer say what the `Switch` element did
4. In a new line above the `</Switch>` tag, paste `<Route component={Main404}/>` and then save your change
5. Open the `Main404.js` and `404.svg` files in your code editor, and will another volunteer say what the `Switch` statement did
6. At the left of the address bar, click the back button to go back to the previous category page

As a review of `webpack` the `import src404 from './404.svg';` statement and `src={src404}` prop of the `img` element mean that the SVG image is included in the application bundle

## Practice fetch with POST method

1. Point at a food in the list at the right, and then will a volunteer say what kind of selector in the `index.css` file you would look for if you wanted to understand the style
2. Open the `fetch.js` file in your code editor
3. Add `method` and `header` properties to the object argument in the `fetchPostPortion` function
4. Save your change, click a food in the list at the right, and notice:
    * a portion of that food appears in the first row of the table
    * a `POST` request appears in the terminal that runs the server
    * a portion object appears at the end of the `db.json` file in the `db` subdirectory

## Practice fetch with PATCH method

1. Add `method` and `header` properties to the object argument in the `fetchPatchPortion` function
2. Save your change, click a different food, click the previous food for `POST` again in the list at the right, and notice:
    * the portion of that food displays `2` in the first row of the table
    * a `PATCH` request appears in the terminal that runs the server
    * the `quantity` property increases in the portion object second from the end of the `db.json` file

## Practice fetch with DELETE method

1. Add `method` property to the object argument in the `fetchDeletePortion` function
2. Save your change, click the portion which doesn’t have quantity `2`, and notice:
    * when you point `X` appears in background and after you click the portion disappears
    * a `DELETE` request appears in the terminal that runs the server
    * the portion object disappears from the end of the `db.json` file

## Examples of React Router

For each of the following links, read code at the right, and then try demo at the left:

1. [Basic](https://reacttraining.com/react-router/web/example/basic)
2. [No Match 404](https://reacttraining.com/react-router/web/example/no-match)
3. [Sidebar](https://reacttraining.com/react-router/web/example/sidebar)
4. [Preventing Transitions](https://reacttraining.com/react-router/web/example/preventing-transitions)
5. [Animated Transitions](https://reacttraining.com/react-router/web/example/animated-transitions)

## Articles with tutorials for React Router

Select an article to read and do its tutorial:

* [Beginner’s Guide to React Router 4](https://medium.freecodecamp.org/beginners-guide-to-react-router-4-8959ceb3ad58)
* [React Router 4: A Practical Introduction](https://auth0.com/blog/react-router-4-practical-tutorial/)
* [React Router v4: The Complete Guide](https://www.sitepoint.com/react-router-v4-complete-guide/)
