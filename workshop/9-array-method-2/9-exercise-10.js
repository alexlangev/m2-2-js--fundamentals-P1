// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
    let sum = 0;
    grades.forEach(function(score){
        sum = sum + score;
    })
    let average = sum / grades.length;
    average = Math.round(average);
    
    let letterGrade = "F";

    if(average < 60) {
        letterGrade = "F";
    } else if (average < 70) {
        letterGrade = "D";
    } else if (average < 80) {
        letterGrade = "C";
    } else if (average < 90) {
        letterGrade = "B";
    } else if (average <100) {
        letterGrade = "A";
    }

    return letterGrade;
}

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


