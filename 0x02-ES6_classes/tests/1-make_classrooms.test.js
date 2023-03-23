import initializeRooms from '../1-make_classrooms';

test('initializeRooms', () => {
  const mock = initializeRooms();
  const mockArray = [19, 20, 34];

  for (const index of mock.keys()) {
    expect(mock[index]._maxStudentsSize).toEqual(mockArray[index]);
  }
});
