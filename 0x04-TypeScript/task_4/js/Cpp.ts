/// <reference path="./Teacher.ts" />
namespace Subjects{
    export class Cpp extends Subject implements SubjectI{
        getRequirements() {
            return 'Here is the list of requirements for CPP'
        }
        getAvailableTeacher(teacher: Teacher): string {
            if (teacher.experienceTeachingC)
            {
                return `Available Teacher: ${teacher.firstName}`
            }
            return 'No available Teacher';
        }
    }
}