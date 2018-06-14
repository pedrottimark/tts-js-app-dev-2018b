# Lesson 4: Functions, part 2

If arrays of objects are your friend as a developer, then **functions** are your best friend.

## Practice git, part 2

In a Terminal window:

1. Change to the `tts-js-app-dev-2018b` directory into which you cloned the repository
2. To get the new subdirectory which contains practice file for tonight: `git pull`

In an Explorer or Finder window, copy the `2018-06-14` subdirectory:
    * from your local `tts-js-app-dev-2018b` directory
    * to your working `tts-js-working-copy` directory

## Review functions

A function definition consists of any of the following:

* arguments receive **input**
* body does **work**
* return gives **output**

An arrow function literal looks like any of the following:

| arguments | body | return | pattern |
| :--- | :--- | :--- | :--- |
| one | none | implicit | `input => output` |
| two | none | implicit | `(inputA, inputB) => output` |
| zero | block | none | `() => { /* side effect (for example, run a unit test) */ }` |
| one | block | explicit | `input => { /* declarations or statements */ return output; }` |

## Learning objectives

1. Read **template literals** as clearer alternative to string concatenation.

2. Rewrite statements as a arrow function **expression** and function **call**.

3. Read code to identify the **scope** of a name.

4. Rewrite code to improve the scope of names in a function **body**.

5. Trace a function call into a function body whose scope is a **closure** because that function was returned by a function.

6. Read **object destructuring** as alternative to object dot notation.

## Scalable Vector Graphics

The specific example in this lesson to apply **functional programming** consists of:
* an input array corresponds to a **polyline**: a set of connected straight line segments
* an input object corresponds to a **point**: an endpoint or a vertex where line segments meet
* an output substring is value of the `points` attribute of an `polyline` element
* some of the corresponding work is to convert numbers to strings with **limited precision**
* the output string is the markup for an `svg` element including its descendants
* the corresponding work is to **interpolate** substrings into **template literals**

## document.write

The global [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object represents the web page loaded in the browser. It provides functionality globally to the document, including creating new elements in the document.

The [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) method writes a string of markup into the web page.

## 01-template-literal

A **template literal** is a string enclosed in backtick quote marks instead of single or double quote marks.

As clearer alternative to string concatenation, you can enclose an expression in an opening `${` and closing `}` to **interpolate** its value converted to a string:

```js
const point = { x: 1 / 4, y: 7 / 8 };
// Convert numbers to coordinates as string: '0.25,0.875'

// By string concatenation:
const string = point.x.toString() + ',' + point.y.toString();

// By template literal:
const string = `${point.x},${point.y}`;
```

1. In a Web browser:

    * Open the `01-template-literal.html` file
    * Right-click in the tab, and then click `Inspect`
    * Expand elements until you see `polyline` elements

2. In a code editor:

    * Open the `01-template-literal.html` file
    * Open the `00-js-svg.css` file
    * Open the `01-template-literal.js` file

**Bonus**: Read [Template Literals](https://leanpub.com/understandinges6/read#leanpub-auto-template-literals) by Nicholas C. Zakas

## 02-pointToString-challenge

Replace duplicated code with calls to an arrow function which has one argument and implicit return.

In different pairs than the previous lesson, edit your copied JavaScript file as our first **challenge**.

1. Both:

    * Open the `02-pointToString-challenge.html` file in a Web browser
    * Open the `02-pointToString-challenge.js` file in a code editor

2. Navigator: tell your pilot what to type at the first `TODO` comment to define `pointToString` as an arrow function expression.

3. Pilot: after you follow directions from pilot to define the `pointToString` function, call the function instead of the template literals at the second and third `TODO` comments

## 03-pointsToStrings-challenge

Replace duplicated code with calls to an arrow function which has one argument and explicit return.

Change roles for our second **challenge**.

1. Both:

    * Open the `03-pointToStrings-challenge.html` file in a Web browser
    * Open the `03-pointToStrings-challenge.js` file in a code editor

2. Navigator: tell your pilot what to type at the first `TODO` comment to define `pointsToStrings` as an arrow function expression.

3. Pilot: after you follow directions from pilot to define the `pointsToStrings` function, call the function instead of `for` loops at the second and third `TODO` comments

Will a volunteer suggest what else we could include in the function to reduce duplicated code?

Will another volunteer suggest a more accurate name for the function if we improved it?

## scope

The **scope** of a name is the code that can refer to it.

For example, a function **body** can refer to the names whose scope includes it:

* arguments of that function
* variables declared inside the body of that function
* variables declared outside that function

But **not**:

* arguments of other functions
* variables declared in the body of other functions

Lexical scope means that you can **read** code to identify the scope of a name. To resolve a name, JavaScript starts in the immediate scope, and then outer scopes, in order.

In classic non-strict JavaScript in a Web browser:

* The scope of a variable is limited to the innermost **function body** in which it is declared; otherwise it is **global** to all script files.
* The scope of an **undeclared** variable is global to all script files.

Node.js has **module** scope which limits code that can refer to a variable to the file.

## 04-toString-toFixed

In JavaScript, a number has methods including:

* [toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) which returns the value as a string in fixed-point notation with a specified number of digits after the decimal point.
* [toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) which returns the value as a string.

After we run the example together, will three volunteers each do one of the following:

* Point out the **scope** of the `nDigits` variable
* Point out the **scope** of the `number` argument
* Trace the code from the beginning to the **first** function call, into the function body, and back again.

This code has two unnecessary “leaks” related to scope:

* `nDigits` let you change the behavior of the function by changing a variable in the outer scope
* `toFixed` and `toString` reveal details how the function body does its work

## pure function

A function is known as **pure** if all of the following are true:

* Given the same arguments, it **always** returns the same value.
* It **doesn’t** change any of its arguments.
* It **doesn’t** cause any side effects, including API calls, for example: `console.log(…)`

## impure function

A function is known as **impure** if any of the following are true:

* Given the same arguments, it **doesn’t** always returns the same value.
* It **does** change any of its arguments.
* It **does** cause any side effects, including API calls, for example: `console.log(…)`

A function which has no `return` statement is usually impure.

Will a volunteer give a reason why `logFixedAndString` is an impure function.

## 05-if-challenge

To reduce the length of the `points` attribute in the `polyline` elements, define `numberToString` to return a string with limited precision at most maxDigits after the decimal point.

Change roles for our next **challenge**.

1. Both:

    * Open the `05-if-challenge.html` file in a Web browser, and expand to see the `points` attributes of the `polyline` elements in the `Element` pane
    * Open the `05-if-challenge.js` file in a code editor

2. Navigator: tell your pilot what to type at the `TODO` comment.

3. Pilot: after you follow directions from pilot:

    * Find where in the code is the `numberToString` function called
    * Find where in the code is the `pointsToString` function called
    * Find where in the code provides the value of `maxDigits`
    * Refresh browser tab, and then verify in `Elements` pane that `points` attributes are as you expect

Will a volunteer trace the `numberToString` function for the first two numbers:

* `0.5`
* `0.4603174603174603`

## 06-ternary-challenge

Change roles for our next **challenge**.

1. Both:

    * Open the `06-ternary-challenge.html` file in a Web browser, and expand to see the `points` attributes of the `polyline` elements in the `Element` pane
    * Open the `06-ternary-challenge.js` file in a code editor

2. Navigator: tell your pilot what to type at the `TODO` comment.

3. Pilot: after you follow directions from pilot:

    * Change the value of one `maxDigits` argument in a `pointsToString` function call
    * Refresh browser tab, and then verify in `Elements` pane that `points` attribute is as you expect

## 07-object-destructuring

With a similar **literal** notation,  put together and take apart an object:

```js
const point = { x: 1 / 2, y: 29 / 63 };

const { x, y } = point; // object destructuring

// const x = point.x; // dot notation
// const y = point.y; // dot notation
```

Here is an example in context:

```js
for (let i = 0; i < points.length; i += 1) {
    const {x, y} = points[i];
    strings[i] = `${numberToString(maxDigits, x)},${numberToString(maxDigits, y)}`;
}
```

**Bonus**: Read [Object Destructuring](https://leanpub.com/understandinges6/read#leanpub-auto-object-destructuring) by Nicholas C. Zakas

## 08-function-closure

A **closure** is a function that accesses data outside its own scope (that is, outside its arguments plus variables declared in its body).

If a function **returns a function**, when you call the returned function, its body can refer to **arguments** of the outer function.

For example, the body of the inner function refers to `maxDigits` of the outer function:

* outer function: `const fixer = (maxDigits) => /* implicitly return inner function */`
* inner function: `number => { … }`

```js
// Define functions to convert points as data to attributes for markup:

// Given maximum number of digits after the decimal point, return function
// that given number, returns string with limited precision.
const getFixer = maxDigits => number => {
    const toFixed = number.toFixed(maxDigits);
    const toString = number.toString(); // default conversion
    return toFixed.length < toString.length ? toFixed : toString;
};
```

In a large application, you can separate the configuration of functions:

```js
// Given configuration as number, return fix functions:

const fix = getFixer(3);
const fix1 = fix;
const fix2 = fix;
```

From the use of functions:

```js
// Return output markup as string:

const output = [
  // …
  `<polyline id="polyline1" points="${pointsToString(fix1, points1)}"></polyline>`,
  `<polyline id="polyline2" points="${pointsToString(fix2, points2)}"></polyline>`,
  // …
].join('');
```

Everyone:

1. Open the `08-function-closure.html` file in a Web browser, and expand to see the `points` attributes of the `polyline` elements in the `Element` pane

2. Open the `08-function-closure.js` file in a code editor, and then:

    * Change the argument of `getFixer` from `3` to a number of your choice
    * Change the assignments of `fix1` and `fix2` to separate functions from `getFixer` with different maximum numbers of digits

## 09-your-initials-challenge

1. Open the `09-your-initials-challenge.html` file in a Web browser, and expand to see the `points` attributes of the `polyline` elements in the `Element` pane

2. Open the `09-your-initials-challenge.js` file in a code editor, and then:

    * Replace the `points1` and `points2` arrays with points for your first and last initial :)
    * In you want to add your middle initial, replace `viewBox="0 0 200 200"` with `viewBox="0 0 300 200"` to give yourself more space

If you want to style your initials more creatively, read more about SVG:

* [Painting](https://www.w3.org/TR/SVG/painting.html)
* [Styling](https://www.w3.org/TR/SVG/styling.html)

If you want to display your initials like a monogram, read more about SVG:

* [Basic Shapes](https://www.w3.org/TR/SVG/shapes.html)
* [Paths](https://www.w3.org/TR/SVG/paths.html)
* [Coordinate Systems](https://www.w3.org/TR/SVG/coords.html)
