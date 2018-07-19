export const getMessageForText = value => {
  if (value.startsWith(' ')) {
    return 'item text cannot start with space';
  } else if (value.endsWith(' ')) {
    return 'item text cannot end with space';
  } else if (value.includes('  ')) {
    return 'item text cannot contain adjacent spaces';
  }
  return '';
};
