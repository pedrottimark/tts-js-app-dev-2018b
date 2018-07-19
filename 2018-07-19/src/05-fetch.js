import convertToJSON from './00-convertToJSON';

export const fetchGetDoer = doerId => fetch(`/doers/${doerId}`).then(convertToJSON);
