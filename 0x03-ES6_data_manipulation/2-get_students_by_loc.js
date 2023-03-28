export default function getStudentsByLocation(array, string) {
  const returnArray = array.filter((array) => array.location === string);
  return returnArray;
}
