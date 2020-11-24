// promises

// pending - hasn't been fulilled or rejected yet
// fulfilled/success - its succeeded
// rejected/failed - its failed

// .then()
// .catch()

let prom = new Promise((resolve, reject) => {
    let a = 1+1; 
    if( a == 500){
        // successful outcome
        resolve("Successfully resolved");
    }else{
        reject("something went wrong");
    }
});

console.log(prom);
prom.then((message) => {
    console.log(`This is in the then block, and the status is: ${message}`);
}).catch((message) => {
    console.log(`This is in the catch block, and the status is: ${message}`);
}).then( () => {
    console.log(`This will be printed no matter what happened before!`);
});

//callback - a function passed into another function as parameter

function greeting(name){
    alert(`Hello ${name}`);
}

function processUserInput(helloooooo){
    let name = prompt("Please enter your name: ");
    helloooooo(name);
}

// processUserInput(greeting);

function sav(){
    console.log("something");
}

function getStudentName(){
    return sav();
}

// console.log(getStudentName());

// async await

// async function test(){
//     return Promise.resolve("Hello there friends");
// }

// test().then(console.log);

async function test(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>resolve("done"),5000);
    });
    let result = await promise; 
    console.log(result);
}

// test();

async function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            console.log("Async Function 1");
            resolve()
        }, 3000);
    });
}

async function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            console.log("Async Function 2");
            resolve()
        }, 2000);
    });
}

async function asyncFunc3(){
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            console.log("Async Function 3");
            resolve()
        }, 1000);
    });
}

async function doThings(){
    await asyncFunc1();
    await asyncFunc2();
    await asyncFunc3();
    console.log("All done");
}

// doThings();

// higher order function - a function that takes in a function or returns a function 

const number = [1,-1,2,3]; 

// a = 0, cv = 1 => a = 1;
// a = 1, cv = -1 => a = 0; 
// a = 0; cv = 2, => a = 2; 
// a =2, cv = 3 => a = 5;
// let final = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// },0); // accumulator initialised to 0 

// // a = 1, cv = -1 => a = 0;
// // a = 0, cv = 2 => a = 2;
// // a = 2, cv = 3 => a = 5; 
// let final = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue; 
// }); // no specified argument

// console.log(final);


const censor = (words) => {
    const filtered = []; 
    for(let i =0; i<words.length; i++){
        const word = words[i];
        if(word.length !== 4) {
            filtered.push(word);
        }
    }
    return filtered; 
}

// console.log(censor(["zonk","army","shout","sun"]));

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// average grade of the classroom 
// average grade of the boys
// average grade of the girls
// highest grade among the boys
// highest grade among the girls

// isgirl
let isGirl = student => student.sex === "F";
let isBoy = student => student.sex === "M";

let getBoys = grades => grades.filter(isBoy);
let getGirls = grades => grades.filter(isGirl);

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade),0)/ grades.length);

let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));

console.log(getBoys(grades));
console.log(getGirls(grades));
console.log(average(grades));
console.log(boysAverage);
console.log(girlsAverage);
