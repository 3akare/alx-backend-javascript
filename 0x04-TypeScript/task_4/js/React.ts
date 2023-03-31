/// <reference path="./Teacher.ts" />
namespace Subjects{
    export class React extends Subject implements SubjectI{
        getRequirements(): string {
            return 'Here is a list of requirements fro React';
        }
        getAvailableTeacher(teacher: Teacher): string {
            if (teacher.experienceTeachingReact){
                return `Available Teacher ${teacher.firstName}`
            };
            return 'No available teacher' ;
        }
    }
}