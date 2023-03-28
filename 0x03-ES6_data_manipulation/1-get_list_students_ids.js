export default function getListStudentIds(array) {
  if (!(Array.isArray(array))) { return []; }
  const returnArray = array.map((x) => x.id);
  return returnArray;
}
