import appendToEachArrayValue from '../10-loops';

test('appendToEachArrayValue', () => {
  const array = ['Dribbler', 'GoalScorer', 'PlayMaker'];
  const string = 'Best ';

  for (const x of array) {
    expect(appendToEachArrayValue(array, string)).toContain(`Best ${x}`);
  }

  const mock = appendToEachArrayValue(array, string);
  mock.forEach(element => {
    expect(element).toContain(`${string}`);
  });

  for (let i = 0; i < mock.length; i++) {
    expect(mock[i]).toBe(`${string}${array[i]}`);
  }
});
