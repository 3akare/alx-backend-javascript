function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}

console.log(getBudgetForCurrentYear(2100, 5200, 1090));
