export default (state = new Map(), action) => {
  switch (action.type) {
    case 'FETCH_GET_SUCCESS':
      return new Map(action.foods.map(food => [food.id, food]));

    default:
      return state;
  }
};
