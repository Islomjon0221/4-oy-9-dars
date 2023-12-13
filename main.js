let arr = [
    {
        name: "John",
        age: 4
    },

    {
        name: "Adam",
        age: 6
    },

    {
        name: "Doe",
        age: 5
    },

    {
        name: "Alex",
        age: 1
    },
]

// 1-misol
// function ex1() {
// let sum = 1;
// for (const element of arr) {
//     sum *= element.age
// };

// return sum;
// }
// console.log(ex1());

// 2-misol

// function ex2() {
// let arg;
// for (const element of arr) {
//     if(element.age >= 25){
//         arg += `${element.age}, `
//     }
// };
// return arg;
// }

// console.log(ex2());

// 3-misol

// function ex3() {
// let sum = 1;
// let counter = 0;
// for (const element of arr) {
//     sum += element.age
//     counter++;
// };
// sum = sum / counter

// return sum;
// }
// console.log(ex3());


// 4-misol

// function ex4() {
//     let max;
//     if (arr[0].age > arr[1].age) {
//         max = arr[0].age;
//     } else {max = arr[1].age;}

//     if (max < arr[2].age) {
//         max = arr[2].age;
//     }

//     if (max < arr[3].age) {
//         max = arr[3].age;
//     }

//     return max
// }

// console.log(ex4());

// 5-misol

// function ex5() {
//     let min;
//     let name;

//     if (arr[0].age > arr[1].age) {
//         min = arr[1].age;
//         name = arr[1].name;
//     } else {min = arr[0].age; name = arr[0].name}

//     if (min > arr[2].age) {
//         min = arr[2].age;
//         name = arr[2].name
//     }

//     if (min > arr[3].age) {
//         min = arr[3].age;
//         name = arr[3].name
//     }

//     return name
// }

// console.log(ex5());

// 6-misol

function ex6() {
let arg ;
for (const element of arr) {
    if(element.age % 2 == 0){
        arg += `${element.age ** 3}, `
    }

    if(element.age % 2 == 1){
        arg += `${element.age ** 2}, `
    }
};
return arg;
}

console.log(ex6());
