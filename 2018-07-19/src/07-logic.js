export const findItem = (items, id) => items.find(item => item.id === id);

export const deleteItem = (items, id) => items.filter(
  item => item.id !== id
);

export const toggleCompleted = (items, id) => items.map(
  item => item.id === id ? {...item, completed: !item.completed} : item
);
