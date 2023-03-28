export default function updateUniqueItems(map) {
  for (const [x, y] of map.entries()) {
    try {
      if (y === 1) {
        map.set(x, 100);
      }
    } catch (error) {
      throw Error('Cannot process');
    }
  }
  return map;
}
