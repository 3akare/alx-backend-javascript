import Airport from '../7-airport';

test('Airport', () => {
  const mock = new Airport('Nnamdi Aiport', '234');
  expect(mock.toString()).toEqual('[object 234]');
});
