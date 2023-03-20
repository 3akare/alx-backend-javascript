export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  let i = 0;
  for (const names of reportWithIterator) {
    string += names;
    if (i !== reportWithIterator.length - 1) {
      string += ' | ';
      i += 1;
    }
  }
  return string;
}
