export const getFoodText = foodId => foodId.replace(/_/g, ' ');

export const getRecommendationClass = recommendation =>
  recommendation < 0 ? 'avoid' : recommendation === 0 ? 'limit' : '';
