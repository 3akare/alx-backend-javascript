import Building from '../5-building';

test('Building', () => {
  class TestBuidling extends Building {}
  const mock = new TestBuidling(200);
  expect(mock._sqft).toBe(200);
  expect(mock.evacuationWarningMessage).toThrow(Error('Class extending Building must override evacuationWarningMessage'));
});
