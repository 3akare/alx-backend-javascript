import { getLast, taskFirst, taskNext } from '../0-constants';

test('constants', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
  expect(getLast()).toBe(' is okay');
  expect(taskNext()).toBe('But sometimes let' + getLast());
});
