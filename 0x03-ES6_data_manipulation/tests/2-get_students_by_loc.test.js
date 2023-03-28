import getStudentsByLocation from '../2-get_students_by_loc';
import getListStudents from '../0-get_list_students';

test('getStudentsByLocation', () => {
  const mock = getListStudents();
  expect(getStudentsByLocation(mock, 'San Francisco')).toEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ]);
  expect(getStudentsByLocation(mock, 'Abuja')).toEqual([]);
});
