import { config } from '../../config/index';

function mockFetchGood(productId) {
  const { delay } = require('../_utils/delay');
  const { findProduct } = require('../../model/inventory');
  return delay().then(() => findProduct(productId));
}
export function fetchGood(productId) {
  if (config.useMock) return mockFetchGood(productId);
  return Promise.resolve(null);
}
