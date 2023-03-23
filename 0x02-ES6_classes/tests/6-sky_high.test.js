import SkyHighBuilding from '../6-sky_high';

test('SkyHighBuilding', () => {
  const building = new SkyHighBuilding(140, 60);
  expect(building.sqft).toBe(140);
  expect(building._floors).toBe(60);
  expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
});
