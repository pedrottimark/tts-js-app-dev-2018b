import {
  addId,
  removeId,
  hasId,
  deletePurchase,
  findIndexPurchase,
} from './06-logic';

describe('deletePurchase', () => {
  const purchase0 = {id: 0};
  const purchase1 = {id: 1};
  const purchase2 = {id: 2};
  const purchase3 = {id: 3};
  it('deletes the only purchase', () => {
    const purchases = [purchase0];
    const expected = [];
    expect(deletePurchase(purchases, 0)).toEqual(expected);
  });
  it('deletes the first purchase', () => {
    const purchases = [purchase1, purchase2, purchase3];
    const expected = [purchase2, purchase3];
    expect(deletePurchase(purchases, 1)).toEqual(expected);
  });
  it('deletes the middle purchase', () => {
    const purchases = [purchase3, purchase2, purchase1];
    const expected = [purchase3, purchase1];
    expect(deletePurchase(purchases, 2)).toEqual(expected);
  });
  it('deletes the last purchase', () => {
    const purchases = [purchase1, purchase2, purchase3];
    const expected = [purchase1, purchase2];
    expect(deletePurchase(purchases, 3)).toEqual(expected);
  });
  it('returns equivalent array if no purchase to delete', () => {
    const purchases = [purchase0, purchase1, purchase2, purchase3];
    const expected = [...purchases];
    expect(deletePurchase(purchases, 4)).toEqual(expected);
  });
});
