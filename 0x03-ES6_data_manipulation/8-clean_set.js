export default function cleanSet(set, startString) {
  let newString = '';
  if (newString === startString) {
    return newString;
  }

  for (const x of set.keys()) {
    if (x.includes(startString)) {
      newString !== '' ? newString += '-' : null; /* eslint-disable-line */
      newString += x.slice((x.indexOf(startString[0]) + startString.length));
    }
  }
  return newString;
}
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));