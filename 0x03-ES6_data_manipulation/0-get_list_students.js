class Students {
  constructor(id, name, country) {
    this.id = id;
    this.name = name;
    this.country = country;
  }

  get() {
    const obj = {
      id: this.id,
      firstName: this.name,
      location: this.country,
    };
    return (obj);
  }
}

export default function getListStudents() {
  const array = ['Guillaume', 1, 'San Francisco'];
  const array1 = ['James', 2, 'Columbia'];
  const array2 = ['Serena', 5, 'San Francisco'];

  const full = [array, array1, array2];
  const returnArray = [];
  for (const x of full) {
    returnArray.push(new Students(x[1], x[0], x[2]).get());
  }
  return (returnArray);
}
