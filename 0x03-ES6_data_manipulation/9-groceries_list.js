export default function groceriesList() {
  const mock = new Map();
  const fruits = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const numbers = [10, 10, 1, 1, 5];

  for (const x of fruits.keys()) {
    mock.set(fruits[x], numbers[x]);
  }
  return mock;
}
