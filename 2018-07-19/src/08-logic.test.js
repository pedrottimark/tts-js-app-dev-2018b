import {
  deleteItem,
  findItem,
  toggleCompleted,
} from './07-logic';

describe('deleteItem', () => {
  const item1 = {
    completed: true,
    text: 'Done that',
    id: 1,
  }
  const item2 = {
    completed: false,
    text: 'Do this',
    id: 2,
  };
  const item3 = {
    completed: false,
    text: 'To do or not to do',
    id: 3,
  };

  it('deletes only item in array', () => {
    const items = [item1];
    const received = deleteItem(items, 1);
    const expected = [];
    expect(received).toEqual(expected);
  });
  it('deletes the first item in array', () => {
    const items = [item1, item2, item3];
    const received = deleteItem(items, 1);
    const expected = [item2, item3];
    expect(received).toEqual(expected);
  })
  it('deletes the middle item in array', () => {
    const items = [item1, item2, item3];
    const received = deleteItem(items, 2);
    const expected = [item1, item3];
    expect(received).toEqual(expected);
  })
  it('deletes the last item in array', () => {
    const items = [item1, item2, item3];
    const received = deleteItem(items, 3);
    const expected = [item1, item2];
    expect(received).toEqual(expected);
  })
});

describe('findItem', () => {
  // TODO test find when the array has an item with given id
  // TODO test find when the array does not have an item with given id
  // TODO test find when the array is empty
});

// TODO toggleCompleted
// test toggle item that is not completed becomes completed
// test toggle item that is completed becomes not completed