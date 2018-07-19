export const getMessageForId = value => {
  if (value.includes(' ')) {
    return 'doer id cannot contain space';
  } else if (value.includes('/')) {
    return 'doer id cannot contain forward slash';
  } else if (value.includes('?')) {
    return 'doer id cannot contain question mark';
  } else if (value.includes('&')) {
    return 'doer id cannot contain ampersand';
  }
  return '';
};
