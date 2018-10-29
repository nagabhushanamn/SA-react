
"use strict";

/*

    .js-lang ==> Functional Programming paradign

    How to create function in .js-language ?

    2 ways

    1  function declaration

            ==> Named function
            ==> function-object created at scope-creation-phase
            ==> always get hoist with function-obj

    2. function-expression

            ==> Anonumous function
            ==> function-object created at scope-execution-phase
            ==> will not get hoist with function-obj
            ==> we can invoke after expression

*/

//-----------------------------------------------------
// 1  function declaration
//-----------------------------------------------------
/* 
console.log(add(12, 13)) // 25

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(12,13))  // 25 */

//-----------------------------------------------------

//-----------------------------------------------------
// 2. function-expression / Anonumous function
//-----------------------------------------------------
/* 
console.log(add(12,13))   // error

var add = function (n1, n2) {
        return n1 + n2;
}

console.log(add(12, 13)) */

//-----------------------------------------------------------

//-----------------------------------------------------------
// function + parameters
//-----------------------------------------------------------

/* function func(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(arguments[3]);
}
 
func()
func(10)
func(10,20)
func(10,20,30)
func(10, 20, 30, 40);
 */

// e.g

/* function sum() {
    let result = 0,
        len = arguments.length,
        i = 0;
    while (i < len) {
        result += arguments[i]
        i++
    }
    return result
}
 */

//-----------------------------------------------------------

// can we overload function .js-language ? No

// function getFood() {
//     return "No Food"
// }
/* 
function getFood(pay) {
        if (arguments.length === 0) return "No Food";
        return "Biryani"
}
console.log(getFood());
console.log(getFood(100));
 */


//-----------------------------------------------------------
// function with default parameters  ( es6 )
//-----------------------------------------------------------

/* 
function func(a = 1, b = 2) {
        // if (!a) a = 1
        // if (!b) b = 2
        //or 
        // a = a || 1;
        // b = b || 2
        console.log(a);
        console.log(b);
}
func(undefined, 20);

 */


//-----------------------------------------------------------
// function wuth rest parameters  ( es6 )
//-----------------------------------------------------------

/* function func(a, b, ...remaining) {
        console.log(a);
        console.log(b);
        console.log(Array.isArray(remaining));
        console.log(remaining)
}
func(10, 20, 30, 40, 50);


 */

//-----------------------------------------------------------
// FP - principles
//-----------------------------------------------------------
/*

// .js-language , functions are first-class values/citizens

    - A function can be stored in a variable or value/object
    - A parameter of a function can be a function
    - The return value of a function can be a function

*/

//------------------------------------------------------
// #1 - A function can be stored in a variable or value
//------------------------------------------------------
/* 
function greet() {
    console.log('Hello..');
}

var sayHello = greet;
sayHello(); */

//------------------------------------------------------
// #2 - - A parameter of a function can be a function
//------------------------------------------------------
/* 
function greet(f) {
    console.log("----------------------------");
    f();
    console.log("----------------------------")
}

var en = function () { console.log("Hello") }
greet(en);
greet(function () { console.log('Ola') }) */


// e.g
/* 
var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort();
var asc = function (a, b) { return a - b }
nums.sort(asc);
var desc = function (a, b) { return b - a }
nums.sort(desc); */

//------------------------------------------------------
// #3 - The return value of a function can be a function
//------------------------------------------------------
/* 
function teach() {
        console.log('teaching .js');
        let learn = function () { console.log('learning .js'); }
        //learn();
        console.log('teaching ends..');
        return learn;
}

let learnFunc = teach()
learnFunc()
learnFunc() */


//---------------------------------------------------------------
// Function Closures
//---------------------------------------------------------------

/*

A closure is a function having access to the parent scope, 
even after the parent function has closed.

*/
/* 
function teach(sub) {
        console.log(`teaching ${sub}`);
        let notes = `${sub}-notes`
        let fun = `bla bla`
        function learn() {
                console.log(`learning with ${notes}`);
        }
        //learn();  
        console.log('teaching ends..');
        return learn;
}
let learnFunc = teach('.js');
learnFunc() */

//---------------------------------------------------------------

/*

where/why we need closures ?

==> to abstract public-behav of any module
==> while executing func async, to access parent-scope data


*/
//---------------------------------------------------------------

// use1: ==> to abstract public-behav of any module

/*
e.g counter-module:

        count=0;
        inc()
        get()

*/
/* 
function init() {
        let count = 0; // private
        // public
        function inc() {
                count++;
        }
        function get() {
                return count;
        }
        return {
                inc: inc,
                get: get
        }
}

const counter1 = init();
const counter2 = init();
 */

//---------------------------------------------------------------
// self-executable / IIFE functions  ==> module patterns
//---------------------------------------------------------------

/* 
const counter = (function () {
        let count = 0; // private
        // public
        function inc() {
                count++;
        }
        function get() {
                return count;
        }
        return {
                inc: inc,
                get: get
        }
})();
 */


//---------------------------------------------------------

// Quiz
function getFood() {
        return {
                name: 'lunch'
        }
}
let food = getFood();
console.log(food.name)

//---------------------------------------------------------

//  Quiz
/* 
function func() {
        j = 100;  //  implicit global scoped..
}
func();

console.log(j); */
 
//---------------------------------------------------------