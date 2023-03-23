import Building from '../5-building';

test('Building', () => {
  class TestBuidling extends Building {}
  expect(() => new TestBuidling(200)).toThrow(Error('Class extending Building must override evacuationWarningMessage'));

  class TestBuidling2 extends Building {
    evacuationWarningMessage () {
      console.log('Evacuate!');
    }
  }
  const mock = new TestBuidling2(200);
  expect(mock._sqft).toBe(200);
});
