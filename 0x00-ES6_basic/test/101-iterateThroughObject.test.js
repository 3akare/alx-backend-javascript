import createIteratorObject from '../100-createIteratorObject';
import iterateThroughObject from '../101-iterateThroughObject';
import createEmployeesObject from '../11-createEmployeesObject';
import createReportObject from '../12-createReportObject';

test('iterateThroughObject', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
  };

  const report = createReportObject(employees);
  const reportWithIterator = createIteratorObject(report);
  expect(iterateThroughObject(reportWithIterator)).toBe('Bob | Jane | Sylvie');
});
