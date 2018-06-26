# Lesson 8: Document Object Model

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) connects JavaScript code in script files to HTML markup in Web pages.

* DOM has a tree structure of **nodes**, including elements, text, and comments.

* Each node corresponds to an **object** which has methods and properties.

* A parent element has an **array** of child nodes, also known as siblings.

* If elements need **interactive** behavior, add callback functions for events.

## Get the practice files

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository
2. To get the new subdirectory which contains practice file for tonight: `git pull`

In an Explorer or Finder window, copy the `2018-06-28` subdirectory:

* from your local `tts-js-app-dev-2018b` directory
* to your working `tts-js-working-copy` directory

## 01-button

[`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) returns the first element object that matches the selector, or `null` if no elements match.

```js
const p = document.querySelector('p');
```

[`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) returns a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) which is an array-like object:

* it has `length` property
* it has bracket notation to access nodes by index
* it doesn’t have have array methods :(

The list does not update when the document changes.

```js
const buttons = document.querySelectorAll('button');
```

An “unobtrusive JavaScript” application adds event listeners to elements so people can **interact** with the page.

Here is an idiom with function [`call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) method of `forEach` array method because `buttons` in array-like object instead of array:

```js
Array.prototype.forEach.call(buttons, button => {
  button.addEventListener('click', onClick);
});
```

Each person individually:

1. Open the `01-button.html` file in a web browser, and then:

    * Open the Console pane
    * When you click a button, see color of paragraph change and see information in Console pane

2. Open the `01-button.html` file in a code editor, and then:

    * Find the 3 classes in the `style` element
    * Find the 3 values of `button` elements

3. Open the `01-button.js` file in a code editor, and then:

    * Add `//` comment at beginning of line after `TODO` comment
    * Remove `//` comment at beginning of the second line after `TODO` comment

4. Refresh browser tab, and then click buttons to see that class attribute and className property are equivalent

[`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) addEventListener() method of an element has arguments:

* event name like [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click) when the pointing device button is pressed and released
* function to be called whenever the specified event is delivered to the target

[`event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object (which is argument of callback function) has properties like [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) which refers to the object that dispatched the event

An element has **attributes** and **properties**.

* [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method sets the value of an attribute like `class`
* [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) property gets and sets the value of the `class` attribute

Will a volunteer trace in the code which lines are executed in order to add the event listener, and then call it when an event occurs.

## 02-input-challenge

[`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element is an interactive control for web-based forms:

* [`type="text"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) attribute is for generic single-line text
* `name` attribute identifies the `value` property in `input` or `change` events, or when the form is submitted
* [`input`](https://developer.mozilla.org/en-US/docs/Web/Events/input) occurs when text of an `input` element changes

```html
<input type="text" name="whatever"/>
```

```js
const onInput = event => {
  const target = event.target;
  console.info(`onInput name=${target.name} value=${target.value}`);
};

const input = document.querySelector('input');
input.addEventListener('input', onInput);
```

In your free choice of pairs, edit your copied JavaScript file as our first **challenge**.

1. Both:

    * Open the `02-input-challenge.html` file in a Web browser, and then open the Console pane
    * Open the `02-input-challenge.html` file in a code editor, and then find the name of the `input` element
    * Open the `02-input-challenge.js` file in a code editor

2. Decide who will start with each role:

    * Pilot: type in the input area of the web page and see information in Console pane

    * Navigator: tell your pilot what to type after the first `TODO` comment to declare name and value as variables with object destructuring

    * Pilot: after you follow directions from pilot, save your changes, refresh the browser tab, and then type in the input area to verify that y’all refactored the code successfully

## 03-select-challenge

[`select`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element displays a drop-down list of options

[`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event occurs when value of `select` element changes

Change roles for our second **challenge**.

1. Both:

    * Open the `03-select-challenge.html` file in a Web browser, and then open the Console pane
    * Open the `03-select-challenge.html` file in a code editor, and then find the name of the `select` element and the values of the `option` elements
    * Open the `03-select-challenge.js` file in a code editor

2. Pilot: select an option in the web page and see no information in Console pane

3. Navigator: tell your pilot what to type for the two `TODO` comments at the end of the file

4. Pilot: after you follow directions from pilot, save your changes, refresh the browser tab, and then select an option in the web page and see information in Console pane

5. Navigator: tell your pilot what to type as the callback function for the first `TODO` comment, after you have looked at the `products` array in the `00-products.js` file

6. Pilot: after you follow directions from pilot:

    * delete `//` comment preceding `const description = findProduct(value).description;`
    * cut `description=${description}` following `//` comment and paste at end of template literal
    * save your changes, refresh the browser tab, and then select an option in the web page and see description information in Console pane

Will a volunteer explain how you would create the `option` elements with JavaScript code from the `products` array in the `00-products.js` file.

## 04-radio-challenge

Groups of `input` elements with [`type="radio"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) attribute describe a set of options which are related by their `name` attribute. Only one radio button in a given group can be selected at the same time.

[`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event occurs when value of radio button group changes (that is, when a particular radio button is selected)

[`fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) displays descendant elements as a visual group.

[`label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) displays a caption.

```html
<fieldset>
<label>Decisions by the referees on the football field should be:</label>
<label><input type="radio" name="decisions" value="const"/>const</label>
<label><input type="radio" name="decisions" value="var"/>VAR</label>
<label><input type="radio" name="decisions" value="let"/>let play continue</label>
</fieldset>
```

Change roles for our next **challenge**.

1. Both:

    * Open the `04-radio-challenge.html` file in a Web browser, and then open the Console pane
    * Open the `04-radio-challenge.html` file in a code editor
    * Open the `04-radio-challenge.js` file in a code editor

2. Pilot: click a radio button in the web page and see no information in Console pane

3. Navigator: tell your pilot what to type for the `TODO` comments (you can adapt code from 03, 02, and 01 `.js` files :)

4. Pilot: after you follow directions from pilot, save your changes, refresh the browser tab, and then select an option in the web page and see information in Console pane

## 05-checkbox-challenge

Each `input` element with [`type="checkbox"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) attribute has a boolean `checked` property.

Unlike a group of radio buttons which have the same value of their `name` attributes, each check box has a unique name.

[`change`](https://developer.mozilla.org/en-US/docs/Web/Events/change) event occurs when value of check box changes.

```html
<label><input type="checkbox" name="local"/>locally grown</label>
<label><input type="checkbox" name="organic"/>organic</label>
```

Change roles for our next **challenge**.

1. Both:

    * Open the `05-checkbox-challenge.html` file in a Web browser, and then open the Console pane
    * Open the `05-checkbox-challenge.html` file in a code editor, and then find the names of the `input` elements
    * Open the `05-checkbox-challenge.js` file in a code editor

2. Pilot: click a checkbox in the web page and see no information in Console pane

3. Navigator: tell your pilot what to type for the `TODO` comments (you can adapt code from 04, 03, 02, and 01 `.js` files :)

4. Pilot: after you follow directions from pilot, save your changes, refresh the browser tab, and then select an option in the web page and see information in Console pane

## 06-form

[`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) contains interactive controls for submitting information to a web server

[`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element is presented in a style similar to that of the host platform the user agent is running on, but you can change the appearance of the button using CSS.

* `type="submit"` causes [`submit`](https://developer.mozilla.org/en-US/docs/Web/Events/submit) event for the **form** which contains the button

* `type="reset"` causes [`reset`](https://developer.mozilla.org/en-US/docs/Web/Events/submit) event for the **form** which contains the button

* `type="button"` or no type specified is for client-side script to attach event listener to `click` event

```html
<form name="produce">
<!-- interactive controls -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
</form>
```

A form has [`elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) property which is collection of its input controls. You can access an element by its index, or much better, by value of its `name` or `id` attribute.

Each person individually:

1. Open the `06-form.html` file in a web browser, open the Console pane, and then:

    * Make some selections, and then click `Submit`
    * Will a volunteer say what data format appears in the Console pane
    * Make some selections, and then click `Reset`

2. Open the `06-form.html` file in a code editor, and then find:

    * the name of the `form` element
    * the 4 names of input controls

3. Open the `06-form.js` file in a code editor.

Will a volunteer describe what you think happens in the following code:

```js
const stateInitial = {
  code: '',
  culinaryCategory: 'fruit',
  local: false,
  organic: false,
};

const state = {...stateInitial};

const resetCode = () => {
  state.code = stateInitial.code;
};

const resetState = () => {
  resetCode();
  state.culinaryCategory = stateInitial.culinaryCategory;
  state.local = stateInitial.local;
  state.organic = stateInitial.organic;
};
```

Will a volunteer suggest a reason for `try-catch` block in the following code:

```js
const form = document.querySelector('form[name="produce"]');

const updateCode = () => {
  try {
    form.elements.code.value = state.code;
  } catch (error) {
    console.error(error.message);
  }
};
```

Will a volunteer explain what difference `event.preventDefault()` makes in the following code:

```js
const updateStateFromForm = () => {
  try {
    const elements = form.elements;
    state.code = elements.code.value;
    state.culinaryCategory = elements.culinaryCategory.value;
    state.local = elements.local.checked;
    state.organic = elements.organic.checked;
  } catch (error) {
    console.error(error.message);
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  updateStateFromForm();
  console.log('onSubmit', JSON.stringify(state));
  resetCode();
  updateCode();
};
```

Will another volunteer suggest a reason why call `resetCode` and `updateCode` in the preceding code, instead of `resetState` as in the following code:

```js
const onReset = (event) => {
  event.preventDefault();
  resetState();
  updateFormFromState();
};
```

## 07-form

* Open the `07-form.html` file in a Web browser, and then open the Console pane
* Open the `07-form.html` file in a code editor
* Open the `07-form.js` file in a code editor
* Open the `00-products.js` file in a code editor
* Open the `00-purchases.css` file in a code editor

In this form, which simulates self checkout to purchase produce at grocery store:

You type a Price Look Up code, and then click `Enter` or press `enter` or `return` key, and then:

* If the product is sold by weight, it gets a random weight between 0.5 and 2.5 pounds.
* If the product is sold by number of items, you type a quantity, and then either click `Enter` or press `enter` or `return` key; otherwise click `Cancel`

Your purchased item appears as the first row of the table with quantity, description, price, and cost.

Will a volunteer remind use where `products` array is defined and explain how `find` method works.

```js
// Given a valid code number, return product object which has that id;
// otherwise null (instead of undefined).
const getProduct = code => products.find(product => product.id === code) || null;
```

Will a volunteer explain how this function implements its comment:

```js
// Return random value 0.5 <= weight < 2.5 for purchase of product.
const getWeight = () => 0.5 + Math.random() * 2;
```

Will a volunteer explain how `reduce` method computes total cost, if you assume that a `purchase` object includes `quantity` and `price` properties:

```js
const getCost = purchases => purchases.reduce(
  (sum, {quantity, price}) => sum + quantity * price,
  0
).toFixed(2);
```

Will a volunteer trace the following `querySelector` calls in `07-form.js` and `07-form.html` files:

```js
const formProduct = document.querySelector('form[name="product"]');
const inputCode = formProduct.querySelector('input[name="code"]');
const buttonEnterCode = formProduct.querySelector('button[type="submit"]');
const fieldsetDescription = formProduct.querySelector('fieldset[name="description"]');
const spanDescription = fieldsetDescription.querySelector('span');
```

Will a volunteer explain which patterns the following regular expressions match:

```js
const CODE_REGEXP = /\d\d\d\d/
const QUANTITY_REGEXP = /\d+/

// Validate the code after change to value of input element.
const validateCode = () => {
  state.isCodeValid = CODE_REGEXP.test(inputCode.value);
};

// Validate the quantity after change to value of input element.
const validateQuantity = () => {
  state.isQuantityValid = QUANTITY_REGEXP.test(inputQuantity.value);
};
```

Mark volunteers to take us on a tour of the rest of this interactive application.

Resources:

* [Price Look Up Codes](https://www.ifpsglobal.com/Identification/PLU-Codes)
* [French PLU code list](https://www.ifpsglobal.com/Portals/22/IFPS%20Documents/Multi-Linqual%20Translations/December%202016%20PLU%20Codes%20French%20Translation.pdf?ver=2016-12-21-212351-940)
* [Spanish PLU code list](https://www.ifpsglobal.com/Portals/22/IFPS%20Documents/Multi-Linqual%20Translations/June%202016%20PLU%20Codes%20Spanish%20Translation.pdf?ver=2016-06-28-195835-817)

## 08-create-form

This single-page application creates the same form to simulate self checkout to purchase produce.

* Open the `08-create-form.html` file to see that JavaScript code will create the form in the `<div id="root"></div>` element

* Open the `08-create-form.js` file to see at the end:

    ```js
    try {
      const root = document.querySelector('#root');
      root.appendChild(formProduct);
      root.appendChild(formQuantity);
      root.appendChild(table);
      updateInterface();
    } catch(error) {
      console.error(error.message);
    }
    ```

* Open the `08-createElement.js` file to see a more declarative `createElement` function:

    ```js
    // Given type as string, props as object or null,
    // and children as string or number,
    // or element from createElement call,
    // return DOM element.
    const createElement = (type, props, ...children) => {
        const element = document.createElement(type);

        // Add props as either event listeners or attributes.

        // Append children

        return element
    }
    ```

Here are the arguments:

* `type` is an element name as string like `'input'`

* `props` is an object which consists of attribute names and values:

    ```js
    {
      type: 'text',
      name: 'quantity',
      onInput: () => {
        validateQuantity();
        updateInterface();
      }
    }
    ```

    If the callback function is for `input` event, then its key is `onInput`, and so on

* `...children` rest parameters is an array which contains the rest of the arguments (if any) when the function is called

For a text node (or `innerHTML` property) the child is a string like `'Description'`

If the child is an element, then you can call `createElement('label', null, 'Description')` within a call to `createElement`

For an extra challenge, replace `document.createElement`, `setAttribute`, `appendChild`, and `innerHTML` with improved `createElement` function in the `renderPurchase` function.

**Render** is a term from React which means create objects which describe markup.
