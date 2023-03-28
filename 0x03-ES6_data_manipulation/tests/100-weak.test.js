import { queryAPI, weakMap } from '../100-weak';

test('queryAPI', () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };
  weakMap.get(endpoint);

  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toEqual(1);
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toEqual(2);
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toEqual(3);
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toEqual(4);

  expect(() => queryAPI(endpoint)).toThrow(Error('Endpoint load is high'));
});
