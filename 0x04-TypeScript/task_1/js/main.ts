export interface Teacher {
    readonly firstName : string;
    readonly lastName : string;
    fullTimeEmployee : boolean;
    yearesOfExperience? : number;
    [index:string] : string | number | boolean;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);