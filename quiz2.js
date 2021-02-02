"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  let str = '';
  for ( let fruit of fruits ) str += ' ' + fruit;
  console.log(str);
  // 이렇게구낭.
  console.log(fruits.toString());
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const array2 = [];
  for ( let i = array.length-1; i == 0; i-- )
  {
      array2.push(array[i]);
  }
  console.log(array2);

}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.splice(0, 2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
    students.forEach(function (student)  {
        if ( student.score === 90 ) {
            console.log(student);
        }
    }) 
}

// Q6. make an array of enrolled students
{
    console.log(students);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const scores = [];
    students.forEach((student) => {
        scores.push(student.score);
    })
    console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
    students.forEach((student) => {
        if ( student.score < 50 ) {
            console.log(true);
        }
    })
}

// Q9. compute students' average score
{
    let sum = 0;
    students.forEach((student) => {
        sum += student.score;
    })
    let average = sum / students.length;
    console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const array = [];
    students.forEach((student) => {
        array.push(student.score);
    })
    console.log(array.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const array = [];
    students.forEach((student) => {
        array.push(student.score);
    })
    for ( let i = array.length; i == 0; i-- ) {
        if ( array[i] > array[i + 1]) {
            array.splice(i, 1, array[i + 1]);
        }
        
    }
    console.log(array);

}
