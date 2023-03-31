namespace Subjects{
    export interface Teacher{
        experienceTeachingReact? : number;
    }
    export class React extends Subjects.Subject{
        getRequirements():string{
            return `Here is a list of requiremnents for React`;
        }
        getAvailableTeacher() : string{
            if (this.teacher.experienceTeachingReact){
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
