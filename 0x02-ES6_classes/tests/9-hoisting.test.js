import { listOfStudents } from '../9-hoisting';

test('Hoisting', () => {
  const mock = [
    'Guillaume Salva - 2020 - San Francisco',
    'John Doe - 2020 - San Francisco',
    'Albert Clinton - 2019 - San Francisco',
    'Donald Bush - 2019 - San Francisco',
    'Jason Sandler - 2019 - San Francisco'
  ];

  const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
  );

  for (const idx of listPrinted.keys()) {
    expect(listPrinted[idx]).toBe(mock[idx]);
  }
});
