// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(', ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(',');
  //const result = fruits.split(',', 2);  split의 개수를 정할 수도 있다. 
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 출력 [5, 4, 3, 2, 1] / 본래의 배열 순서도 변경되며 return 값도 변경된다. 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  // splice: 배열 자체의 값을 삭제해서 변경하고 싶을 때 사용.
  // slice: 원하는 인덱스의 값을 추출해서 사용하고자 할 때. 
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
    // 모든 객체를 차례대로 조회한다.
    // 조건에 맞는 객체가 있다면 find 함수 실행을 종료한다. 
    // Callback 함수 
    const student = students.find((student) => student.score === 90 );
    console.log(student);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // map: Callback 함수
    // value를 전달받아 원하는 값으로 변경해서 리턴.
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{   
    // ~중에 (return: boolean)
    const result = students.some((student) => student.score < 50 );
    console.log(result);

    // 모두가 조건에 맞는다면 (return: boolean)
    const result2 = !students.every((student) => student.score >= 50 );
    console.log(result2);
}

// Q9. compute students' average score
// reduce는 return으로 prev 값에 셋팅해주어야 한다.
// 처음에는 prev가 0이고, 그 다음에는 return한 값이 prev가 된다. 
// curr는 배열의 item을 전달 받는다. 
// reduce: 무언가 값을 누적할 때 사용한다.
{
    console.clear();

    const result = students.reduce((prev, curr) => prev + curr.score, 0 );
    console.log(`평균 점수: ${result/students.length}`);
    /* 위와 같이 중괄호를 없애고 return 도 없애고 간단하게 표현할 수 있다.
    const result = students.reduce((prev, curr) => {
        console.log('--------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result);
    */

    // reduceRight는 뒤에서부터 거꾸로 호출된다. 
    const result2 = students.reduceRight((prev, curr) => {
        console.log('--------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result2);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// API 들을 묶어서 사용할 수도 있다. 
{
    const result = students
    .map((student) => student.score)
    //.filter((score) => score >= 50 ) 
    .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score )
    .sort((a, b ) => a - b)
    // 점수를 큰것부터 나열하고 싶다면?
    //.sort((a, b) => b - a )
    .join(', ');
    console.log(result);
}
