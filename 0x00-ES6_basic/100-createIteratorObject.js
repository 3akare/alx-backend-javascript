export default function createIteratorObject(report) {
  const list = [];
  let i = 0;
  for (const x of Object.values(report.allEmployees)) {
    for (const y of x) {
      list[i] = y;
      i += 1;
    }
  }
  return list;
}
