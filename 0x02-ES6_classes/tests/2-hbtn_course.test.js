import HolbertonCourse from '../2-hbtn_course';

test('HolbertonCourse Initialization Test', () => {
  const mockArray = ['Bob', 'Jane'];
  const mock = new HolbertonCourse('ES6', 1, mockArray);
  expect(mock._name).toBe('ES6');
  expect(mock._length).toBe(1);

  for (const x of mock._students.keys()) {
    expect(mock._students[x]).toBe(mockArray[x]);
  }
});

test('HolbertonCourse Throw Error Test', () => {
  expect(() => new HolbertonCourse(3, 1, ['null'])).toThrow(new TypeError('Name must be a string'));
  expect(() => new HolbertonCourse('3', '1', ['null'])).toThrow(new TypeError('Length must be a number'));
  expect(() => new HolbertonCourse('3', 1, 'null')).toThrow(new TypeError('Students must be an array of strings'));
  expect(() => new HolbertonCourse('3', 1, ['null', 0])).toThrow(new TypeError('Students must be an array of strings'));
});

test('HolbertonCourse Get and Set Test', () => {
  const mock = new HolbertonCourse('Timothy', 1, []);
  expect(mock._name).toBe('Timothy');
  expect(mock.name).toBe('Timothy');
  mock.name = 'David';
  expect(mock._name).toBe('David');
  expect(mock.name).toBe('David');

  expect(() => mock.length = '7').toThrow(new TypeError('Length must be a number'));
});
