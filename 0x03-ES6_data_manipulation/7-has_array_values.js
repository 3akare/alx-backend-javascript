export default function hasValuesFromArray(set, array) {
  let status = true;
  array.forEach((element) => {
    if (!set.has(element)) {
      status = false;
    }
  });
  return status;
}
