export interface Teacher {
    readonly firstName : string;
    readonly lastName : string;
    fullTimeEmployee : boolean;
    yearesOfExperience? : number;
    [index:string] : string | number | boolean;
}

export interface Directors extends Teacher {
    numberOfReports : 17;
}

export function printTeacher(firstname : string, lastname : string) : string
{
    return `${firstname} ${lastname}`;
}

export interface StudentClassI {
    _firstName : string;
    _lastName : string;
    workOnHomeWork() : string;
    displayName() : string;
}

export class StudentClass implements StudentClassI{
    _firstName : string;
    _lastName : string;
    constructor(firstName : string, lastName : string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomeWork(): string {
        return 'Currently working';
    }

    displayName(): string {
        return `${this._firstName}`
    }
} 
