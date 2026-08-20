import { config } from '../../config/index';
function mockSearchResult(params) {
  const { delay } = require('../_utils/delay');
  const { getSearchResult } = require('../../model/search');
  return delay().then(() => getSearchResult(params));
}
export function getSearchResult(params) {
  if (config.useMock) return mockSearchResult(params);
  return Promise.resolve({ spuList: [], totalCount: 0 });
}
