export default function cleanSet(set, startString) {
  let newString = '';
  const returnArray = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const x of set.values()) {
    if (x.startsWith(startString) && typeof x === 'string') {
      newString = x.substring(startString.length);
      returnArray.push(newString);
    }
  }
  return returnArray.join('-');
}
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));