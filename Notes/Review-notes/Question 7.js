const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6, 7]

const arr = ([...new Set([...array1, ...array2])]);

const reduceworks = (arr) => {
    const sum = arr.reduce((accumulator, current) => { accumulator = arr[current] + accumulator }, 0)
    console.log(sum)
}

const greater = array2.filter((x) => x > 3);
console.log(greater);

const sum = array2.reduce((pre, cur) => (pre + cur), 0);
console.log(sum);

const map = array1.map(x => mapper(x));
console.log(array1);
console.log(map);

function mapper (input) {
    return input + 10;
}



const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
];

let isBoy = student => student.sex === 'M'

let getBoys = grades => (
    grades.filter(isBoy)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
)

let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
