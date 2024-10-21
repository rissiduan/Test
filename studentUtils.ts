// Part 1
class Student {
    name: string;
    age: number;
    grades: number[] = [];
    static totalStudents: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        Student.totalStudents++;
    }

    addGrade(grade: number): void {
        this.grades.push(grade);
    }

    getAverageGrade(): number {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length ? total / this.grades.length : 0;
    }

    static getTotalStudents(): number {
        return this.totalStudents;
    }
}

// Part 2
class GraduateStudent extends Student {
    thesisTopic: string;

    constructor(name: string, age: number, thesisTopic: string) {
        super(name, age);
        this.thesisTopic = thesisTopic;
    }

    getAverageGrade(): number {
        let average = super.getAverageGrade();
        if (this.thesisTopic === "Artificial Intelligence") {
            average += 5; 
        }
        return average;
    }
}

// Part 3
interface Teacher {
    name: string;
    subject: string;
    students: Student[];
}

function getTeacherInfo(teacher: Teacher): void {
    console.log(`Teacher: ${teacher.name}`);
    console.log(`Subject: ${teacher.subject}`);
    console.log(`Number of students: ${teacher.students.length}`);
}

// Part 4
class Database<T> {
    private entries: T[] = [];

    addEntry(entry: T): void {
        this.entries.push(entry);
    }

    getEntries(): T[] {
        return this.entries;
    }
}

// Part 5
function createGradeMultiplier(multiplier: number) {
    return (grade: number) => grade * multiplier;
}

const doubleGrade = createGradeMultiplier(2);

const student1 = new Student("Alice", 20);
student1.addGrade(80);
student1.addGrade(90);
student1.grades = student1.grades.map(doubleGrade);

const student2 = new Student("Bob", 22);
student2.addGrade(70);
student2.addGrade(60);
student2.grades = student2.grades.map(doubleGrade);

// Part 6
async function fetchStudentData() {
    try {
        const response = await new Promise<{ name: string; grades: number[] }>((resolve) =>
            setTimeout(() => resolve({ name: "Charlie", grades: [85, 90, 95] }), 1000)
        );

        console.log(`Fetched student: ${response.name}, Grades: ${response.grades}`);
    } catch (error) {
        console.error('Error fetching student data:', error);
    }
}

// Part 7
const students = [student1, student2];
const topStudents = students.filter(student => student.getAverageGrade() > 70);
const studentNames = students.map(student => student.name);
const totalGrades = students.reduce((total, student) => total + student.grades.length, 0);

console.log(`Top Students: ${topStudents.map(s => s.name).join(', ')}`);
console.log(`Student Names: ${studentNames.join(', ')}`);
console.log(`Total Number of Grades: ${totalGrades}`);

// Part 8
function parseStudentData(jsonData: string) {
    try {
        const student = JSON.parse(jsonData);
        return student;
    } catch (error) {
        return 'Error parsing student data';
    }
}


// Part 9
export function calculateMedianGrade(grades: number[]): number {
    if (grades.length === 0) return 0; 

    grades.sort((a, b) => a - b);
    const mid = Math.floor(grades.length / 2);


    return grades.length % 2 === 0
        ? (grades[mid - 1] + grades[mid]) / 2 
        : grades[mid];
}