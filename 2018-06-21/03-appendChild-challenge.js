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
    this.attributes = [];
    this.childNodes = [];
};

// Given child node or element, append to childNodes array of instance.
HTMLElement.prototype.appendChild = function (child) {
  // TODO 1
};

const text = new Text('Individual daylily flowers last only one day but …');

const p = new HTMLElement('p');
p.appendChild(text);
console.log(`p as object:\n${format(p)}`);
console.log(`\np as DOM element:\n${formatDOM(p)}`);

// TODO 2
// TODO assign an li element to variable with name li
// TODO append p as child of li
// TODO console.log li as object
// TODO console.log li as DOM element
