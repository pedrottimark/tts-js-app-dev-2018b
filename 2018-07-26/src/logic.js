// Compare portions to sort in descending order by quantity.
const comparePortions = ({quantity: quantityA}, {quantity: quantityB}) =>
  quantityA === quantityB
    ? 0
    : quantityA > quantityB ? -1 : 1;

export const filterFoodsByCategory = (foods, category) => foods.filter(
  food => food.category === category
);

export const filterPortionsByCategory = (portions, category) => portions.filter(
  portion => portion.food.category === category
);

export const filterPortionsByIndex = (portions, index) => portions.filter(
  portion => portion.index === index
).sort(comparePortions);

export const deletePortion = (portions, portionId) => portions.filter(
  portion => portion.id !== portionId
);

export const appendPortion = (portions, portion) => [...portions, portion];

export const incrementQuantity = (portions, portionId) => portions.map(
  portion => portion.id === portionId
    ? {...portion, quantity: portion.quantity + 1}
    : portion
).sort(comparePortions);

export const findPortionByFoodId = (portions, foodId) => portions.find(
  portion => portion.foodId === foodId
);

export const findFoodById = (foods, foodId) => foods.find(
  food => food.id === foodId
);

export const getRecommendationClass = recommendation =>
  recommendation < 0
    ? 'avoid' :
    recommendation === 0 ?
      'limit' :
      '';
