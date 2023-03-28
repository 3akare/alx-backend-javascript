import getListStudents from '../0-get_list_students';
import getListStudentIds from '../1-get_list_student_ids';

test('getListStudentsIds', () => {
  expect(getListStudentIds(getListStudents())).toEqual([1, 2, 5]);
  expect(getListStudentIds('Hello world')).toEqual([]);
  expect(getListStudentIds(2)).toEqual([]);
  expect(getListStudentIds({ id: 2 })).toEqual([]);
});
