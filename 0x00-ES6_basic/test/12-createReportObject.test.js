import createEmployeesObject from '../11-createEmployeesObject';
import createReportObject from '../12-createReportObject';

createEmployeesObject;
createReportObject;

test('', () => {
  const fields = ['computer science', 'Medicine', 'French'];
  const employees = {
    ...createEmployeesObject(`${fields[0]}`, ['Bob', 'Jane']),
    ...createEmployeesObject(`${fields[1]}`, ['Sylvie'])
  };
  const mock = { [`${fields[0]}`]: ['Bob', 'Jane'], [`${fields[1]}`]: ['Sylvie'] };

  const report = createReportObject(employees);
  expect(report.getNumberOfDepartments()).toBe(2);
  expect(report.allEmployees).toEqual(mock);
});
expect();
