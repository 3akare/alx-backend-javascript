import getNeighborhoodsList from '../2-arrow';

test('arrow', () => {
  const mock = new getNeighborhoodsList();
  expect(mock.sanFranciscoNeighborhoods).toContain('SOMA');

  expect(mock.sanFranciscoNeighborhoods).toContain('Union Square');

  expect(mock.sanFranciscoNeighborhoods).toHaveLength(2);

  expect(mock.addNeighborhood('Kurudu')).toContain('Kurudu');

  expect(mock.sanFranciscoNeighborhoods).toHaveLength(3);
});
