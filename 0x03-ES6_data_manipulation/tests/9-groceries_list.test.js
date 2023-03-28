import groceriesList from '../9-groceries_list';

test('groceriesList', () => {
  const mock = groceriesList();
  const fruits = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  let cnt = 0;
  const numbers = [10, 10, 1, 1, 5];
  expect(typeof mock === 'object').toEqual(true);
  for (const [x, y] of mock.entries()) {
    expect(x).toEqual(fruits[cnt]);
    expect(y).toEqual(numbers[cnt]);
    cnt++;
  }
});
