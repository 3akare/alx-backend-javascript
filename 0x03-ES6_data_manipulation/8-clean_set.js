export default function cleanSet(set, startString) {
  const returnArray = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const x of set.values()) {
    if (x.startsWith(startString) && typeof x === 'string') {
      const newString = x.substring(startString.length);
      if (newString && newString !== x) {
        returnArray.push(newString);
      }
    }
  }
  return returnArray.join('-');
}
