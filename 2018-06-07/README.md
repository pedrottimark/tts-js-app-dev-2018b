# Lesson 2: Arrays and Objects

## Learn git, part 1

1. Decide on the **parent** directory for two child directories:
    * Your **local** copy (known as a clone) of the class repository on GitHub
    * Your **working** copy of files for each lesson

2. In a Command Prompt or Terminal window, use `cd` command to change to the **parent** directory

3. In a browser window, open `https://github.com/pedrottimark/tts-js-app-dev-2018b`

4. Click the `Clone or download` button at the right, and then copy the text

5. To **clone** the repository, on command line:
    * type `git clone` and then press space bar
    * paste the text that you copied and then press enter or return key

    Will a volunteer say what is the name of the new subdirectory which contains your local copy?

6. To make the directory for **working** copy of files: `mkdir tts-js-working-copy`

7. To copy files from **local** copy to **working** copy:
    * `cp tts-js-app-dev-2018b/.editorconfig tts-js-working-copy`
    * `cp -R tts-js-app-dev-2018b/2018-06-07 tts-js-working-copy`

    If `cp -R` command doesn’t work in Command Prompt, then you can copy the `2018-06-07` subfolder from the `tts-js-app-dev-2108b` folder, and then paste it into the `tts-js-working-copy` folder

8. To change to the **working** copy of files for this lesson: `cd tts-js-working-copy/2018-06-07`

## Learn Node.js, part 1

[Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

In other words, you can run JavaScript programs on a command line instead of in a browser.

A general way to see if a command is installed on your computer is try it with `--version` option:

```sh
node --version
```

## 01-typeof

For review, will several volunteers each say a type of value in JavaScript.

The `'use strict';` directive causes JavaScript to report some errors, like undefined variables.

The global `console.log` function displays the value of one or more expressions.

The `typeof` operator gives the type of a value as a string.

1. In your code editor, open the `01-typeof.js` file
2. In Command Prompt or Terminal: `node 01-typeof.js`

## Array

An **array** is a list-like object which consists of items at indexes.

To make an array using **literal** notation, enclose it in brackets:

```js
const dryIngredients = [
  '2 cups all-purpose flour',
  '1 tablespoon baking powder',
  '1/2 teaspoon salt',
];

const wetIngredients = [
  '1/2 cup shortening',
  '3/4 cup milk',
];

const directions = [
  'Preheat oven to 450 degrees F (230 degrees C).',
  'In a large mixing bowl sift together flour, baking powder and salt. Cut in shortening with fork or pastry blender until mixture resembles coarse crumbs.',
  'Pour milk into flour mixture while stirring with a fork. Mix in milk until dough is soft, moist and pulls away from the side of the bowl.',
  'Turn dough out onto a lightly floured surface and toss with flour until no longer sticky. Roll dough out into a 1/2 inch thick sheet and cut with a floured biscuit or cookie cutter. Press together unused dough and repeat rolling and cutting procedure.',
  'Place biscuits on ungreased baking sheets and bake in preheated oven until golden brown, about 10 minutes.',
];
```

An **item**, also known as an element, is a value in an array.

The **index** or “address” of an item is a zero-based integer number.

Will a volunteer say the name of the naming convention for `dryIngredients` and `wetIngredients` variables?

## Analogy: array in JavaScript to list in HTML

The array data structure in JavaScript is like the `ul` or `ol` markup structure in HTML.

Both structures consist of items in order, even if order is not significant.

```html
<h1>biscuits</h1>

<h2>Dry ingredients</h2>

<ul>
  <li>2 cups all-purpose flour</li>
  <li>1 tablespoon baking powder</li>
  <li>1/2 teaspoon salt</li>
</ul>

<h2>Wet ingredients</h2>

<ul>
  <li>1/2 cup shortening</li>
  <li>3/4 cup milk</li>
</ul>

<h2>Directions</h2>

<ol>
  <li>Preheat oven to 450 degrees F (230 degrees C).</li>
  <li>In a large mixing bowl sift together flour, baking powder and salt. Cut in shortening with fork or pastry blender until mixture resembles coarse crumbs.</li>
  <li>Pour milk into flour mixture while stirring with a fork. Mix in milk until dough is soft, moist and pulls away from the side of the bowl.</li>
  <li>Turn dough out onto a lightly floured surface and toss with flour until no longer sticky. Roll dough out into a 1/2 inch thick sheet and cut with a floured biscuit or cookie cutter. Press together unused dough and repeat rolling and cutting procedure.</li>
  <li>Place biscuits on ungreased baking sheets and bake in preheated oven until golden brown, about 10 minutes.</li>
</ol>
```

## 02-array-index

1. In your code editor, open the `02-array-index.js` file
2. Will 4 volunteers each say what you expect one of the `console.log` lines to display?
3. In Command Prompt or Terminal: `node 02-array-index` notice you can omit `.js` file name extension

## 03-array-for-length-challenge

The `length` property gets or sets the current **number of items** in an array.

You usually refer to a property using **dot** notation: `ingredients.length`

First, will a volunteer please describe how the `for` loop works step-by-step:

```js
// initialize variable; test condition; increment variable
for (var i = 0; i < ingredients.length; i += 1) {
  console.log(i/*, ingredients[TODO] */); // replace TODO with the index of a term
}
```

Then in pairs, edit your copy of the JavaScript file as our first **challenge**.

* Someone take role of **navigator** to suggest what to do and why to do it.
* Someone else take role of **pilot** to edit the file, and then run it with `node` command.

## 04-array-while-challenge

Change roles for our second **challenge** to replace `for` statement with `while` statement:

```js
// TODO initialize variable
while (/* TODO test condition */) {
  console.log(i, ingredients[i]);
  // TODO increment variable
}
```

## 05-for-if-break

1. In your code editor, open the `05-for-if-break.js` file
    * [`process.argv[2]`](https://nodejs.org/dist/latest-v10.x/docs/api/process.html#process_process_argv) is an idiom to make a script interactive on the command line
    * Will a volunteer explain `||` conditional or
    * string [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method returns either the index within the calling string of the first occurrence of the string argument; otherwise `-1`
    * Will a volunteer please describe how the `while` loop works step-by-step
    * Will another volunteer say what value of `i` you expect if no item matches the substring
2. In Command Prompt or Terminal: `node 05-for-if-break` with a substring argument of your choice

### 06-array-indexOf-if-else-challenge

A **method** is a function which is a property of an object.

An array is a specialized object which has many methods, see: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

For example, the [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method returns either the first index at which an item is found in the array; otherwise `-1`

The method is more clear and concise than the `for if break` loop in the preceding example code.

You usually refer to a method using **dot** notation: `var index = ingredients.indexOf(item);`

Change roles for our next **challenge** to give relevant feedback after trying to find an item:

```js
// replace comments with expressions for relevant feedback
if (index === -1) {
  console.log(/* TODO */)
} else {
  console.log(/* TODO */)
}
```

Will a volunteer explain the compare and explain the behavior of this script and the previous script for command line argument `powder` versus `baking powder`

### 07-array-indexOf-ternary-challenge

Change roles for our next **challenge** to replace `if` statement with ternary expression:

```js
// replace comments with expressions from preceding challenge
console.log(index === -1
  ? /* TODO */
  : /* TODO */
);
```

### 08-array-slice-start-end

The [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method returns a new array which contains items:
* from a **start** index
* up to but **not including** an **end** index

```sh
node 08-array-slice-start-end pour and mix
node 08-array-slice-start-end "pour and mix"
```

Will two volunteers each trace the script for one of the previous commands

* what is the value of `index`
* which indexes does the sliced array contain (if relevant)
* what is the length of the sliced array (if relevant)

### 09-array-slice-start-challenge

The length of the array is default for **end** index in the `slice` method.

Change roles for our next **challenge** to slice the steps which follow a step (that is, the steps for which it is a prerequisite).

Will a volunteer guess what happens if you slice the items which follow the last item?

### 10-array-slice-copy-challenge

The start of the array is default for **start** index in the `slice` method.

Therefore `const copied = items.slice();` is an idiom to **copy** an array.

For arrays, the strict equality `===` operator tests their **identity**, not the equality of their items.

Will a volunteer explain the last set of comparisons?

Change roles for our next **challenge** to change `const copied = ingredients.slice();` to `const copied = ingredients;` and add some more `console.log` lines to understand what happens.

Will another volunteer explain the differences in the results?

## Object

An object consists of properties. Each **property** has:

* **key**, also known as name, which is a string (or a number converted to a string)
* **value**, which is any type

To make an object using **literal** notation, enclose it in braces.

```js
const ingredient = {
    quantity: 2,
    unit: 'cup',
    stuff: 'flour',
};
```

You usually refer to a property by **dot** notation:

```js
const quantity = ingredient.quantity;
```

Will a volunteer guess what is the value of a property that doesn’t exist, like `ingredient.unknown`?

## 11-object-keys

Will a volunteer guess why an object doesn’t have a `length` property to get the number of properties?

Instead, the [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method returns an **array** of property keys for the argument object.

You can use **bracket** notation if the key is the value of a variable.

1. In your code editor, open the `11-object-keys.js` file
2. In Command Prompt or Terminal: `node 11-object-keys`

Will a volunteer trace the script?

## Array of objects

Most Web pages and mobile apps have arrays of objects as data.

```js
const ingredients = [
  {
    quantity: 2,
    unit: 'cup',
    stuff: 'flour',
  },
  {
    quantity: 1,
    unit: 'tablespoon',
    stuff: 'baking powder',
  },
  {
    quantity: 0.5, // 1/2
    unit: 'teaspoon',
    stuff: 'salt',
  },
];
```

### Analogy: array of objects in JavaScript to table in HTML

```html
<h2>Dry ingredients</h2>

<table>
  <thead>
    <tr>
      <th scope="col">quantity</th>
      <th scope="col">unit</th>
      <th scope="col">stuff</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2</td>
      <td>cup</td>
      <td>flour</td>
    </tr>
    <tr>
      <td>1</td>
      <td>tablespoon</td>
      <td>baking powder</td>
    </tr>
    <tr>
      <td>0.5</td>
      <td>teaspoon</td>
      <td>salt</td>
    </tr>
  </tbody>
</table>
```

### 12-array-isArray

Because an array is a specialized object, the `typeof` operator doesn’t distinguish arrays from generic objects.

The [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) method returns whether the argument is an array.

### 13-array-push-challenge

The [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method adds one or more items to the end of an array.

```js
items.push(item);
items.push(itemA, itemB, itemC);
```

Unlike the `slice` method which returns a new array, the `push` method modifies or **mutates** the original array.

Here is an idiom that you might see to add an item to the end of an array:

```js
items[items.length] = item;
```

Change roles for our next **challenge** to push items onto an array.

Will a volunteer guess what happens if you push an item more than one time?

Will another volunteer guess what happens if change the value of a property after you push an item more than one time?

Will yet another volunteer suggest how we can test these expectations?

## 14-array-concat-challenge

The [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method returns a new array which consists of the items from one or more arrays.

Merge is a synonym for `concat` which is short for concatenate.

Change roles for our next **challenge** to write expressions as described in comments.

```js
const itemsA = items.concat(item);
const itemsB = items.concat(itemA, itemB, itemC);
```

Change roles for our next **challenge** to concat items onto two new arrays.

Will a volunteer suggest how we can test that the arrays are new, more directly than comparing results of `console.log`?

By the way, `const copied = items.concat();` is another idiom to **copy** an array.

### 15-array-join

The [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method returns a string which consists of the items (converted to strings) joined by a joiner string.

* The `slice` and `concat` methods of an array return a new **array**.
* The `join` method of an array returns a **string**.
* Remember the `indexOf` method of an array? Will a volunteer please say which type it returns?

The [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method splits a string into an array of substrings, using a specified separator string to determine where to make each split.

Will a volunteer say what is the problem with joining, and then splitting, even with the same joiner?

### 16-JSON

The [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object has methods to transfer data in JavaScript Object Notation:

* The [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method converts a JSON string to a JavaScript value. For example, convert data after receiving it as a string from a server.
* The [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method converts a JavaScript value to a JSON string. For example, convert data before sending it as a string to a server.


### Homework

### Links to learning resources

**Scan** the following resources for at least 5 minutes each:

* [Grammar and types at Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
* [Array at Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JSON Introduction at w3schools.com](https://www.w3schools.com/js/js_json_intro.asp)

### Analogy: CSS style to object properties

Here are style properties in CSS:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
```

For which some developers use style objects in React:

```js
var style = {
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
}
```

You change hyphenated property names in CSS to camelCase property keys in JavaScript.

If a CSS value is not a number, enclose it in quote marks to make it a string.

**Write** a style definition in CSS, and then write the equivalent style object in JavaScript.

### Brainstorming from visual wireframe to data wireframe

1. **Pick** a web page or mobile screen with a list of structured information that interests you.

2. **Draw** a wireframe diagram of the visual hierarchy of the page (for example, header, footer, sidebar, main).

3. **Make notes** on your wireframe diagram about data displayed in each area.

    * **Identify** primitive or primary types of data: boolean, number, string
    * **Identify** data structures: array or object

4. **Draw lines** between areas which might have data in common.

5. **Draw arrows** between areas where there is a cause-and-effect interactive relationship: when you do something here, it affects something there.

6. **Look for** any ways that the visual structure does not correspond to the data structure.

7. If you find ways that the visual structure does not correspond to the data structure, **use your imagination** about HTML and CSS (for example, absolute positioning) to decide if the markup structure might correspond more closely to the data structure.
