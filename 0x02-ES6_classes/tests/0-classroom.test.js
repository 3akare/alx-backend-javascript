import ClassRoom from '../0-classroom';

test('ClassRoom', () => {
  const room = new ClassRoom(10);
  expect(room).toHaveProperty('_maxStudentsSize', 10);
});
