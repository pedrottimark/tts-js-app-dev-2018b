# Functions and objects

## Get the practice files

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository
2. To get the new subdirectory which contains practice file for tonight: `git pull`
3. To install the `pretty-format` package: `npm install pretty-format`

In an Explorer or Finder window, copy the `2018-06-21` subdirectory:
* from your local `tts-js-app-dev-2018b` directory
* to your working `tts-js-working-copy` directory

## object shorthand

If a variable for the value of an object property has the same name as the key, you can **omit the repeated name** in literal notation.

```js
// Given coordinates as numbers, return point as object.

// You must include repeated names in earlier versions of JavaScript:
const createPoint = (x, y) => ({x: x, y: y});

// You can omit repeated names in ECMAScript 2015:
const createPoint = (x, y) => ({x, y});
```

## object destructuring

With a similar literal notation, put together and **take apart** an object.

You can use object destructuring in variable declarations:

```js
// In earlier version of JavaScript:
const x = point.x;
const y = point.y;

// In ECMAScript 2015:
const {x, y} = point;
```

You can use object destructuring in function arguments:

```js
// Given point as object, return coordinates as string.

// In earlier version of JavaScript:
const getCoordinates(point) => `${point.x},${point.y}`;

// In ECMAScript 2015:
const getCoordinates({x, y}) => `${x},${y}`;
```

**Bonus**: Read [Object Destructuring](https://leanpub.com/understandinges6/read#leanpub-auto-object-destructuring) by Nicholas C. Zakas

## 01-object-challenge

To improve code in a way that doesn’t change its inputs or outputs is known as **refactoring**.

In different pairs than the previous lesson, edit your copied JavaScript file as our first **challenge**.

1. Both:

    * Open the `01-object-challenge.html` file in a Web browser
    * Open the `01-object-challenge.js` file in a code editor

2. Decide who will start with each role:

    * Navigator: tell your pilot what to type at the first `TODO` comment to replace props arg and dot notation in template literals with object destructuring.

    * Pilot: after you follow directions from pilot, save your changes, and then refresh the browser tab.

3. Change roles:

    * Navigator: tell your pilot what to type at the second `TODO` comment to replace props arg and dot notation in template literals with object destructuring, and then the third `TODO` comment to omit repeated names with object shorthand.

    * Pilot: after you follow directions from pilot, save your changes, and then refresh the browser tab.

Will a volunteer trace the following array `map` method and `renderPlant` callback function:

```js
const items = plants.map(renderPlant).join('');
```

To **render** is a term from React which means return objects which describe markup. In this file, it means return markup as string.

**Bonus**: Search sources of information about plants:

* [USDA Plants Database](https://plants.sc.egov.usda.gov/java/stateSearch)
* [Clemson Cooperative Extension](https://hgic.clemson.edu/category/flowers/)

## 02-constructor-challenge

In classic JavaScript, a **constructor** is a function that initializes an instance when you call it with the `new` keyword.

* For each property that is **individual** to an instance, assign the value to the key of `this` keyword in the constructor function.
* For each method that is **shared** by all instances, assign the value to the key of `prototype` keyword.

By convention, the name of a constructor function starts with an upper case letter.

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) connects JavaScript code in script files to HTML markup in Web pages.

* DOM has a tree structure of **nodes**, including elements, text, and comments.
* Each node corresponds to an **object** which has methods and properties.
* A parent element has an **array-like** object of child nodes, also known as siblings.
* The attributes of an element are an **array-like** object whose items are objects with `name` and `value` properties.

For an example of object-oriented JavaScript, we will emulate text and element objects.

```js
// Given character data, construct instance of text node.
const Text = function (data) {
  this.nodeType = 3;
  this.data = data;
};
```

You might think of constructor function with `nodeType` and `data` properties as the “shape” of a cookie cutter, and the specific values as the decorations on a particular cookie.

```js
const text = new Text('Individual daylily flowers last only one day.');
```

As with object literals, you can construct multiple instances which have the same values, but are not equal:

![6 heart-shaped cookies with pink JS on yellow](cookies-JS.jpeg)

Change roles for our second **challenge**.

1. Both: open the `02-constructor-challenge.js` file in a code editor

2. Pilot in Terminal: `node 02-constructor-challenge.js` and see `TypeError: Array.prototype.map called on null or undefined` because `HTMLElement` constructs instance with incomplete shape

3. Navigator: tell your pilot what to type at the `TODOs` comment to initialize `childNodes` and `attributes` properties as empty arrays

4. Pilot: after you follow directions from pilot, in Terminal: `node 02-constructor-challenge.js` and compare formatting as plain object to formatting as DOM node or element.

In a future lesson, we will learn how to import `format` function from `pretty-format` package:

```js
const format = require('pretty-format');
const options = {plugins: [format.plugins.DOMElement]};
const formatDOM = value => format(value, options);
```

In another future lesson, we will learn how to test that given specific input, a function returns expected output.

**Bonus**: Read about properties:

* [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
* [`tagName`](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
* [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
* [`attributes`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

## 03-appendChild-challenge

After you construct a DOM element, you can call its [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method to add text nodes or other elements.

```js
const text = new Text('Individual daylily flowers last only one day but …');

const p = new HTMLElement('p');
p.appendChild(text);
```

Change roles for our next **challenge**.

1. Both: open the `03-appendChild-challenge.js` file in a code editor

2. Navigator:

    * If you don’t know which impure array method to append (that is, add to the end) an item, skim the information about `Array` at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

    * Tell your pilot what to type at the first `TODO` comment to append (that is, add to the end) the `child` argument to `childNodes` array of instance

3. Pilot: after you follow directions from pilot for first `TODO` comment:

    * At the second and following `TODO` comments, adapt the preceding code from `p` element to `li` element

    * In Terminal: `node 03-appendChild-challenge.js` and compare formatting of `p` and `li` as plain object to formatting as DOM element.

## 04-setAttribute-challenge

After you construct a DOM element, you can call its [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method to set the value of an attribute.

Change roles for our next **challenge**.

1. Both: open the `04-setAttribute-challenge.js` file in a code editor

2. Navigator:

    * If you haven’t used array `find` method, skim the information at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

    * Tell your pilot what to type for the first set of `TODO` comments to find an attribute with the given name, and then if it exists, assign the given value, otherwise add a new attribute

3. Pilot: after you follow directions from pilot for first set of `TODO` comments:

    * At the second set of `TODO` comments, construct an `img` element, and then set its `src` and `alt` attributes

    * In Terminal: `node 04-setAttribute-challenge.js` and compare formatting of `li` and `p` and `img` as plain objects to formatting as DOM elements.

## class

The constructor and methods of a class run in strict mode without a `'use strict';` directive.

Another benefit of a class: its braces enclose methods without any `prototype` keywords.

Because the name follows `class` keyword, `constructor` is always the name of the constructor function.

Write **concise methods** like a declaration without `function` keyword:

```js
class Text {
  constructor(data) {
    this.nodeType = 3;
    this.data = data;
  }
}
```

You construct an instance of a class with `new` keyword and class name same as with constructor function.

```js
const text = new Text('Individual daylily flowers last only one day.');
```

Here is a difference that is easy to forget: don’t separate methods in a class with commas (but do separate methods in an object literal with commas).

**Bonus**: Read pages 165–190 [Introducing JavaScript Classes](https://leanpub.com/understandinges6/read#leanpub-auto-introducing-javascript-classes) by Nicholas C. Zakas

## 05-class-challenge

Work collaboratively as co-navigators and both type the changes for our next **challenge**.

1. Open the `05-class-challenge.js` file in a code editor

2. Convert the `HTMLElement` constructor function to class with `constructor` as concise method

3. Move the `appendChild` and `setAttribute` methods into class as concise methods

4. To test the class, construct instances and call methods as suggested by comments to make equivalent DOM elements and text nodes to the HTML markup enclosed in the preceding `/*` and `*/` comments

## document

In a web browser, the global `document` object has methods which include:

* [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [`createTextNode`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
* [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

The `createElement` and `createTextNode` methods are known as virtual constructors, because they hide whether or not they construct instance with `new` keyword.

The `appendChild` method adds an element to the `body` of the web page.

## 06-document-challenge

Work collaboratively as co-navigators and both type the changes for our next **challenge**.

1. Open the `06-document-challenge.js` file in a code editor

2. Adapt code from '04-setAttribute-challenge.js' file to set attributes of `img` element

3. Adapt code from `05-class-challenge.js` file to create contents of `h3` element, however:

    * replace `new Text(…)` with `document.createTextNode(…)`
    * replace `new HTMLElement(…)` with `document.createElement(…)`

4. Use array `forEach` method to append each `li` element in items array to `ul` element

5. Open the `06-document-challenge.html` file in a web browser, and then:

    * open the `Console` pane to see if there are any errors
    * open the `Inspector` pane to see the content which you have added to the DOM

6. Drag the right edge of the browser window to left and right to see `flex` layout

7. Open the `00-plants.css` file and find `flex` properties

**Bonus**: Read about properties for `flex` layout in CSS:
* [Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/)
* [Leveling up with FlexBox](http://www.zomigi.com/downloads/Leveling-Up-With-Flexbox_SmashingConf_140319.pdf) by Zoe Mickley Gillenwater
