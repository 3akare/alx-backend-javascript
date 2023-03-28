export default function cleanSet(set, startString) {
  let newString = '';
  const returnArray = [];
  if (newString === startString) {
    return newString;
  }

  for (const x of set.keys()) {
    if (x.includes(startString)) {
      newString = x.substring(startString.length);
      returnArray.push(newString);
    }
  }
  return returnArray.join('-');
}
