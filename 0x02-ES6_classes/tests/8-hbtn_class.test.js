import HolbertonClass from '../8-hbtn_class';

test('HolbertonClass', () => {
  const mock = new HolbertonClass(10, 'Lagos');
  expect(Number(mock)).toBe(10);
  expect(String(mock)).toBe('Lagos');
});
