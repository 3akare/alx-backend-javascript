export default function cleanSet(set, startString) {
  const returnArray = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString) && typeof value === 'string') {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        returnArray.push(valueSubStr);
      }
    }
  }
  return returnArray.join('-');
}
