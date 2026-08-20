import { inventoryProducts, toListItem } from './inventory';

export function getSearchHistory() {
  return { historyWords: ['SHIMANO', '头盔', 'M码'] };
}
export function getSearchPopular() {
  return { popularWords: ['OGK KABUTO', '骑行服', '锁鞋'] };
}
export function getSearchResult({ keyword = '', minPrice = 0, maxPrice } = {}) {
  const normalized = decodeURIComponent(keyword).trim().toLowerCase();
  const products = inventoryProducts.filter((item) => {
    const text = [item.productId, item.brand, item.name, item.model, item.color, item.size, item.category]
      .join(' ')
      .toLowerCase();
    return (
      (!normalized || text.includes(normalized)) &&
      item.priceRmb * 100 >= minPrice &&
      (!maxPrice || item.priceRmb * 100 <= maxPrice)
    );
  });
  return { pageNum: 1, pageSize: products.length, totalCount: products.length, spuList: products.map(toListItem) };
}
