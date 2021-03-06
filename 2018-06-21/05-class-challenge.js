const format = require('pretty-format');
const options = { plugins: [format.plugins.DOMElement] };
const formatDOM = value => format(value, options);

class Text {
  constructor(data) {
    this.nodeType = 3;
    this.data = data;
  }
}

// TODO
const HTMLElement = function (tagName) {
    this.nodeType = 1;
    this.tagName = tagName.toUpperCase();
    this.attributes = [];
    this.childNodes = [];
};

// TODO
// Given child node or element, append to childNodes array of instance.
HTMLElement.prototype.appendChild = function (child) {
  this.childNodes.push(child);
};

// TODO
// Given name and value, set existing or new attribute of instance.
HTMLElement.prototype.setAttribute = function (name, value) {
  const found = this.attributes.find(attribute => attribute.name === name);
  if (found) {
    found.value = value;
  } else {
    this.attributes.push({name, value});
  }
};

// Test the classes:

const href = 'https://plants.sc.egov.usda.gov/core/profile?symbol=HEMER';
const scientificName = 'Hemerocallis';
const authority = 'L.';
const commonName = 'daylily';

/*
<h3>
<a href="https://plants.sc.egov.usda.gov/core/profile?symbol=HEMER">
<em>Hemerocallis</em> <abbr>L.</abbr>
<br/>
<span>daylily</span>
</a>
</h3>
*/

const h3 = new HTMLElement('h3');

// TODO
// a which has href attribute and the following children:
// em
// text node whose character data is one space
// abbr
// br
// span

// append a to h3

console.log(formatDOM(h3));
