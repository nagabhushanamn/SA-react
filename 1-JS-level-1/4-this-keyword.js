"use strict"
/* 
function func() {
    console.log(this)
}
func();
 */

/*

function binding
-------------------

=> function on object

2 types

1. static function-binding
2. dynamic function-binding


*/

//---------------------------------------------------------------------------------
// a. static function binding
//---------------------------------------------------------------------------------
/* 
function sayNameForAll() {
    console.log('im ' + this.name);
}

sayNameForAll(); // Error

let p1 = {
    name: 'Nag',
    sayName: sayNameForAll,  // static function-binding
    doWork: function () {
        console.log(this.name + "working..");
    }
}
p1.sayName();

let p2 = {
    name: 'Ria',
    sayName: sayNameForAll
};
p2.sayName();

 */


/* let employee = {
    name: 'IBM',
    doWork: function () {
        console.log(this.name + "emp working");
    }
}
employee.doWork() */;

//---------------------------------------------------------------------------------
// b. dynamic function binding
//---------------------------------------------------------------------------------


function ibmJavaTraining(sub, duration) {
    console.log(`the trainer:${this.name}, teaching ${sub} - ${duration} `);
}

function ibmJSTraining(sub, duration, location) {
    console.log(`the trainer:${this.name}, teaching ${sub} - ${duration} : ${location}`);
}

let tnr1 = { name: 'Nag' }
let tnr2 = { name: 'santhunu' }


// tnr1.ibmJavaTraining = ibmJavaTraining;
// tnr1.ibmJavaTraining("spring boot", 3);

// tnr1.ibmJSTraining = ibmJSTraining;
// tnr1.ibmJSTraining("react", 3);


// dynamci function-binding 
/* 
//way-1: call()
ibmJavaTraining.call(tnr1, "spring", 3);
ibmJavaTraining.call(tnr2, "spring-boot", 3);

//way-2: apply()
ibmJavaTraining.apply(tnr1, ["spring", 3]);
ibmJavaTraining.apply(tnr2, ["spring-boot", 3]);

//way-3: bind()
let newF = ibmJSTraining.bind(tnr1, "react", 3);
newF("BLR");// 
newF("PUNE");
newF("KOL")
 */
//---------------------------------------------------------------------------------

// summary
/* 
function func() {
    console.log(this);
}
func();

// static function binding
let o1 = {
    name: 'O1',
    f: func
}

// // dynamic function binding
let o2 = { name: 'O2' }
func.call(o2)
func.apply(o2)
func.bind(o2)(); */


// //---------------------------------------------------------------------------------

// let o = { name: "Joshua" }

// function tempNewWork() {
//     console.log("work by " + this.name);
// }

// tempNewWork.call(o);

//---------------------------------------------------------------------------------

// let person = { name: 'Nag' }
// Object.preventExtensions(person); // i.e we cannot add new properties

// function sayName() {
//     console.log('im ' + this.name);
// }

// // person.sayName = sayName// error
// sayName.apply(person);


//---------------------------------------------------------------------------------

// Quiz

// let pName="global";
/* 
let person = {
    pName: 'Nag', // obj's property
    sayName: function () {
        let pName = "local"; // scope's data
        console.log('im ' + pName); // scope hierarchy data
        console.log('im ' + person.pName); // refering obj's data
        console.log('im ' + this.pName); // scope-owner's data
    }
};

person.sayName();
let oldPerson = person
person = { pName: 'Ria' }
oldPerson.sayName();
 */

//---------------------------------------------------------------------------------

// summary


// 'this'  ==> the owner of current scope


//---------------------------------------------------------------------------------

// Q
/* 

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let notes = ".js-notes";
        let self=this;
        let doLearn = function () {
            console.log(this.name + ' learning with ' + notes +" from "+self.name);
        }
        console.log('teaching ends');
        return doLearn;
    }
}

// waeek-1
let doLearn = tnr.doTeach();
// doLearn();
let emp = { name: "ibm" };
doLearn.call(emp)

//week-2
let tempTnr = { name: 'Ria' }
let learnFunc = tnr.doTeach.call(tempTnr)
learnFunc.apply(emp);
 */


//---------------------------------------------------------------------------------


// let i = 10;
// function func() {
//     console.log(i);
//     console.log(this);
//     console.log(this.i);
// }
// func();



//---------------------------------------------------------------------------------



// 

function sessionStart() {
    let ibmTraining = function () {
        console.log(this.name + " teaching..");
        let self = this;
        let doLearn = function () {
            console.log(this.name + " learning .js from " + self.name);
        }
        console.log('teaching ends.');
        return doLearn;
    }
    function Trainer(name) {
        this.name = name;
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer("Nag");
    let e1 = new Employee("E1");
    let e2 = new Employee("E2");
    let doLearn = ibmTraining.call(tnr)
    doLearn.call(e1);
    doLearn.call(e2);
}
sessionStart();