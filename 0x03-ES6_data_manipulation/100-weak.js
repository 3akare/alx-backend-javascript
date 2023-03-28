export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  let i = weakMap.get(endpoint);
  i += 1;
  if (i >= 5) {
    throw Error('Endpoint load is high');
  }
  return weakMap.set(endpoint, i);
}
