import getListStudents from '../0-get_list_students';
import updateStudentGradeByCity from '../4-update_grade_by_city';
getListStudents;

test('updateStudentGradeByCity', () => {
  expect(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }])).toEqual([
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
      grade: 'N/A'
    },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
  ]);

  expect(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }])).toEqual([
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
      grade: 86
    },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
  ]);
});
