interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
}

export const studentsList: Student[] = [];

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

function tableCreate() {
    let html : string  = `<table><tr><th>First Name</th><th>Location</th></tr>`;
    for (let x of studentsList){
        html += `<tr><td>${x.firstname}</td><td>${x.location}</td></tr>`
    }
    html += '</table>';

    const tbl = document.getElementsByTagName("BODY")[0].innerHTML = html
  }
  
  tableCreate();