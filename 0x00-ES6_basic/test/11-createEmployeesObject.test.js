import createEmployeesObject from '../11-createEmployeesObject';

test('createEmployeesObject', () => {
  const value = 'languages';
  const languages = ['Python', 'C', 'ES6 Javascript'];

  const mock = createEmployeesObject(value, languages);

  expect(mock.languages).toEqual(languages);
  expect(String(Object.keys(mock))).toEqual(value);
});
