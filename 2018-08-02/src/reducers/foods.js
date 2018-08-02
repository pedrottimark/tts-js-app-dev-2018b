export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GET_SUCCESS':
      return action.foods;

    default:
      return state;
  }
};
