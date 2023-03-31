/// <reference path="./Teacher.ts" />
namespace Subjects{
   export class Java extends Subject implements SubjectI{
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(teacher: Teacher): string {
            if (teacher.experienceTeachingJava){
                return `Available Teacher: ${teacher.firstName}`
            }
            return 'No available teacher';
        }
   }
}
