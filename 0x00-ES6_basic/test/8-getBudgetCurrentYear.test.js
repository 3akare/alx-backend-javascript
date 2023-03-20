import getBudgetForCurrentYear from '../8-getBudgetCurrentYear';

function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
test('getBudgetForCurrentYear', () => {
    const year = getCurrentYear();
    const mock = { [`income-${year}`]: 200, [`gdp-${year}`] : 300, [`capita-${year}`] : 400 };
  expect(getBudgetForCurrentYear(200, 300, 400)).toEqual(mock);
});
