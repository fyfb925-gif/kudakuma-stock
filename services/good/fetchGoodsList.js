import { config } from '../../config/index';
function mockFetchGoodsList(params) {
  const { delay } = require('../_utils/delay');
  const { getSearchResult } = require('../../model/search');
  return delay().then(() => getSearchResult(params));
}
export function fetchGoodsList(params) {
  if (config.useMock) return mockFetchGoodsList(params);
  return Promise.resolve({ spuList: [], totalCount: 0 });
}
