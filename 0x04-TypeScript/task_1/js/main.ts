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
