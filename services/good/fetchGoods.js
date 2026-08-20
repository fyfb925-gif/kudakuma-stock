import { config } from '../../config/index';

function mockFetchGoodsList(pageIndex = 0, pageSize = 20) {
  const { delay } = require('../_utils/delay');
  const { getGoodsList } = require('../../model/goods');
  return delay().then(() => getGoodsList(pageIndex, pageSize));
}
export function fetchGoodsList(pageIndex = 0, pageSize = 20) {
  if (config.useMock) return mockFetchGoodsList(pageIndex, pageSize);
  return Promise.resolve([]);
}
