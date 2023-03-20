import createIteratorObject from '../100-createIteratorObject';

test('createIteratorObject', () => {
  const mock = {};
  mock.allEmployees = { engineering: ['Bob', 'Jane'], marketing: ['Sylvie'] };
  const list = ['Bob', 'Jane', 'Sylvie'];

  for (let i = 0; i < mock.allEmployees.length; i++) {
    expect(createIteratorObject(mock)[i]).toBe(list[i]);
  }
});
