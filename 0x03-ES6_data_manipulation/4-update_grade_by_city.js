export default function updateStudentGradeByCity(array, city, newGrades) {
  let returnArray = [];
  for (const x of newGrades) {
    returnArray = array.filter((array) => ((array.id === x.studentId) || array.location === city));
  }

  let newArray = [];

  if (newGrades.length === 2) {
    newArray = (returnArray.map((x) => Object.assign(x, { grade: (x.id === newGrades[0].studentId ? newGrades[0].grade : newGrades[1].studentId === x.id ? newGrades[1].grade : 'N/A') }))); /* eslint-disable-line */
  } else {
    newArray = (returnArray.map((x) => Object.assign(x, { grade: (x.id === newGrades[0].studentId ? newGrades[0].grade : 'N/A') })));
  }
  // Im not very proud of this function tbvh, but it does what its meant to do
  return newArray;
}
