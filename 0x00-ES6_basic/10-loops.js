export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const list = [];
  for (const x of array) {
    list[idx] = `${appendString}${x}`;
    idx += 1;
  }
  return list;
}
