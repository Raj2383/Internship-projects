// Input array
const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

// Function to calculate the averages
function calculateAverages(students) {
    return students.map(student => {
        const studentName = Object.keys(student)[0];
        const subjects = student[studentName];
        const totalScore = Object.values(subjects).reduce((sum, score) => sum + score, 0);
        const averageScore = totalScore / Object.values(subjects).length;
        return {
            [studentName]: {
                average: Math.round(averageScore) // rounding to nearest integer
            }
        };
    });
}

// Calculate the averages
const result = calculateAverages(students);

// Output the result
console.log(result);
