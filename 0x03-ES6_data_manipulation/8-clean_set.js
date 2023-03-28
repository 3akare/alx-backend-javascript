export default function cleanSet(set, startString) {
  let newString = '';
  if (newString === startString) {
    return newString;
  }

  for (const x of set.keys()) {
    if (x.includes(startString)) {
      newString !== '' ? newString += '-' : null; /* eslint-disable-line */
      newString += x.slice(startString.length);
    }
  }
  return newString;
}
