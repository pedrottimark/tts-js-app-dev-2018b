'use strict';

const convertToJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
