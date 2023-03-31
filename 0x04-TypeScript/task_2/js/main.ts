export interface DirectorInterface {
    workFromHome() : string;
    getToWork() : string;
    workDirectorTasks() : string;
}

export interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getToWork() : string{
        return 'coffee break'
    }
    workDirectorTasks(): string {
        return 'getting to director tasks';
    }
}

export class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

export function createEmployee(salary: number | string) : Director | Teacher{
    if(typeof salary === 'number' && salary < 500){
        return new Teacher
    }
    return new Director;
}
