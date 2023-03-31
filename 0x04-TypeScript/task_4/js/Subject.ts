/// <reference path="./Teacher.ts" />
namespace Subjects{
    export interface SubjectI {
        teacher : Teacher;
        setTeacher(teacher : Teacher) : void;
        getAvailableTeacher?(teacher : Teacher) : string;
        getRequirements?() : string;
    }
    export class Subject implements SubjectI{
        teacher: Teacher;
        constructor(teacher : Teacher){
            this.teacher = teacher 
        }
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}