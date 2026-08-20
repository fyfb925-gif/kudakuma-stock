import { inventoryProducts, toListItem } from './inventory';

export function getGoodsList(baseIndex = 0, length = inventoryProducts.length) {
  return inventoryProducts.slice(baseIndex, baseIndex + length).map(toListItem);
}

export const goodsList = getGoodsList();
