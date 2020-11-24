// variables

// let // can be changed after a value
// const // final variable

let a = 1; 
const b = 100; 

a = 30; 
// b = 500; 

// iterators

// for( initialisation; condition; iterator){
//     statement; 
// }

for (let i=0; i<=10; i++){
    console.log(i);
}

// while loop 
// do while 
// while

// do while - will execute atleast once regardless of the condition 
// while - might not execute at all 

let i = 15; 

while(i>20){
    console.log("while loop");
    i++;
}

i=15; 

do{
    console.log("do while loop");
}while(i>20);

// Equailty and type

// ==  (is the value the same)
// === (same type)

console.log(1 === "1"); // false - 
console.log(1 === true); // false

console.log(1 == "1"); // true

// check the type of variable 
console.log(typeof(1)); // number
console.log(typeof("1")); // string
console.log(typeof(true)); // boolean
console.log(typeof(2.4)); // number

let strictA = true; // evaluates to 1
let strictB = 1; 

console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true

// ES6 short hands

// ternary statement

let age = 10; 

if(age >=18 && age<=65){
    console.log("Age is in range");
}else if(age <18){
    console.log("It's a baby");
}else{
    console.log("Catch all else");
}

age = 18;

// Syntax: condition ? valueiftrue : valueifFalse
let result = age>=50 ? " 50 or over" : "under 50";

console.log(result);

// arrays

let array = [3];
console.log(array[0]); // 3
console.log(array[45]); // empty - undefined
console.log(array[50] = "savannah"); 
console.log(array);

// undefined - there is no value at the moment - empty 

// undefined and null? - null is something, a definition 
array[1] = null; 
console.log(array);

// objects: 

let car = {}; 
let vehicle = new Object(); 
let blue = {make:"hyundai", model:"i30", reg:"lt60nvx"};

console.log(blue);
console.log(blue.make);
blue.mileage = 560000;
console.log(blue);
console.log(blue['make']);

// JSON - JavaScript Object Notation
// unordered set of name/value pairs
// it begins with { and ends with }
// each name is followed by a :
// each name/value is separated by a ,

let JSONObject = {
    "searchProducts" : ["coke", "sprite", "pepsi"],
    "result": [
        {
            "productName":"abc",
            "price" : 10, 
            "quantity" : 500
        },
        {
            "productName":"xyz",
            "price" : 500, 
            "quantity" : 60
        }
    ]
}

console.log(JSONObject.searchProducts[1]);


// JSON Parse - is a method that take a string and parses it into an object
let string = `{"name": "sav"}`;
let obj = JSON.parse(string);
console.log(obj);
console.log(typeof(string));
console.log(typeof(obj));

// JSON Stringify - method that takes in an object and returns a string
let str = JSON.stringify({name:"john"});
console.log(typeof(str), str);

// destructuring - VERY IMPORTANT IN REACT

const myArray = [1,2,3,4,5];
console.log(myArray[0]); // a1
console.log(myArray[1]); // b1
console.log(myArray[2]); //c1
console.log(myArray[3],myArray[4]); //d1, e1

const[a1,b1,c1,d1,e1] = myArray;
console.log(a1);
console.log(e1);

const grades = [21,3,4,5,667,78,5,43,45,35,345,35,345,34,53,534,57,7,56,75,885,85,12313,234,2,423,42,42,344];
const [person1, person2, , , , , ...somethingelse] = grades; 
console.log(person1);
console.log(person2);
console.log(somethingelse);

// `` / string concatination

const person = { 
    first: "Chris", 
    middle: "p.",
    last: "bacon", 
    country: "uk", 
    city: "manchester"
}

let {first, middle, last} = person; 

console.log("My friends name is " + first + " " + middle + " " + last);
// es6 - string concatination
console.log(`My friends name is ${first}      ${middle}       ${last}`);
console.log(`My friends name is ${person.first} ${person.middle} ${person.last}`);


// VAR IS BADDDDD!!!
// function santander_deposit(){
//    availableBalance = 25000; 
// }

// santander_deposit(); 
// availableBalance = 10000000000; //noooo
// console.log(availableBalance); // nooooooooo!!

function test(){
    let flag = true; // local scope only exists here
    alert(flag); // true
    test1(); 
    alert(flag); // true (test scope)
}


function test1(){
    flag = false; // global scope
    return; 
}

// test(); // we always look for variables in our local scope before going global!

function globalTest(){
    flag = true; // global scope exists in the whole file!
    alert(flag); //true
    globalTest1();
    alert(flag); // false
}

function globalTest1(){
    flag = false; 
    return; 
}

// globalTest();

// Arrow functions

function addMe(number1, number2){
    return number1+number2; 
}

console.log(addMe(23,3));

let x = addMe(23,3);
console.log(x);

// syntax: name = (parameters) => {}

addMe = (num1,num2) => num1+num2; 

hello = () => "simple function";

console.log(hello());

// multiple lines in return 
hello2 = () => {
    console.log("more lines");
    console.log("more lines");
    console.log("more lines");
    console.log("more lines");
    console.log("more lines");
    console.log("more lines");
    console.log("more lines");
}
hello2();