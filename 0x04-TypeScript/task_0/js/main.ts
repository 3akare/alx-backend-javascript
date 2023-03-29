interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

const studentsList: Student[] = [];

function createStudents(firstname : string, lastname : string, age : number, location : string) : Student{
    const user: Student = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        location: location
    }
    return  user;
}

studentsList.push(createStudents("David", "Bakare", 9, "Abuja"));
studentsList.push(createStudents("Samuel", "Ajibola", 10, "Ekiti"));