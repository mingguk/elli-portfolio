'use strict'

// <1.variable>

// 2. Variable
// let (added in ES6)

let globalName = 'global name';

{
    let name='elli';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log('name');
console.log(globalName);

// var 
// Do not use var ,var hoisting 
// has no block scope
{
age = 4;
var age;
}

console.log(age);

// 3. constants
const daysInWeek = 7;
const maxNumber = 5;

// 4. variable types
// primitive , single item 
// Object, box CredentialsContainer
// function, first-class function

// <2. 

