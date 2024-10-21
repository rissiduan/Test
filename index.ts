import { calculateMedianGrade } from './studentUtils'; 

class Student {
    name: string;
    grades: number[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addGrade(grade: number): void {
        this.grades.push(grade);
    }
}

const student1 = new Student("Alice");
student1.addGrade(83);
student1.addGrade(92);
student1.addGrade(76);
student1.addGrade(85);

const medianGrade = calculateMedianGrade(student1.grades);
console.log(`Median grade for ${student1.name}: ${medianGrade}`);
