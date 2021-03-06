const ON_REGEXP = /^on[A-Z]/

// Given prop key, return corresponding attribute name.
const getAttributeName = key => {
  switch (key) {
    case 'className':
      return 'class';
    default:
      return key;
  }
};

// Given prop key of event like onClick,
// return corresponding event name like click.
const getEventName = key => key.slice(2).toLowerCase();

// Given string or number item in children array,
// return text node; otherwise return element node.
const getChild = item => {
  switch (typeof item) {
    case 'string':
    case 'number':
      return document.createTextNode(item);
    default:
      return item;
  }
};

// Given type as string, props as object or null,
// and children as string or number,
// or element from createElement call,
// return DOM element.
const createElement = (type, props, ...children) => {
  const element = document.createElement(type);

  if (props) {
    Object.keys(props).forEach(key => {
      const value = props[key];
      if (ON_REGEXP.test(key)) {
        element.addEventListener(getEventName(key), value);
      } else {
        element.setAttribute(getAttributeName(key), value);
      }
    });
  }

  children.forEach(item => {
    // Ignore falsey values, especially from conditional and.
    if (item !== false && item !== null && item !== undefined) {
      element.appendChild(getChild(item));
    }
  });

  return element;
};

export default createElement;
