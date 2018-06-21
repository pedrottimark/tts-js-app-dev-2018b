'use strict';

const format = require('pretty-format');
const options = {plugins: [format.plugins.DOMElement]};
const formatDOM = value => format(value, options);

// Given character data, construct instance of text node.
const Text = function (data) {
  this.nodeType = 3;
  this.data = data;
};

// Given tag name, constuct instance of HTML element.
const HTMLElement = function (tagName) {
  this.nodeType = 1;
  this.tagName = tagName.toUpperCase();
  // TODO 1 initialize attributes property with empty array
  // TODO 2 initialize childNodes property with empty array
};

const text = new Text('Individual daylily flowers last only one day.');
console.log(`text as object:\n${format(text)}`)
console.log(`\ntext as DOM node:\n${formatDOM(text)}`);

const p = new HTMLElement('p');
console.log(`\np as object:\n${format(p)}`);
console.log(`\np as DOM element:\n${formatDOM(p)}`);
