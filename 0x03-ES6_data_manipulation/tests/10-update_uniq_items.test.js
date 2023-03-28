import updateUniqueItems from '../10-update_uniq_items';
import groceriesList from '../9-groceries_list';

test('updateUniqueItems', () => {
  const mock = updateUniqueItems(groceriesList());
  expect(mock.get('Pasta')).toEqual(100);
  expect(mock.get('Rice')).toEqual(100);
});
