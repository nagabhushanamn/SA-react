"use strict"

/*

 in 2015, ECMAScript community ,  ECMAScript-2015  or ES6

 New syntax
 -----------

 1. sring interpolation
 2. let & const keywords with block-scope
 3. function with default & rest params
 4. New way of OO with class-syntax
 
 5. Obj-litral enhancements
 6. de-structuring
 7. spread operator
 8. arrow-function

 9. symbol data-type
 10. itertors
 11. for-of-loop


*/


//----------------------------------------------------------------
//  Obj-litral enhancements
//----------------------------------------------------------------
/* 
let name = "Nag";
let age = 35;

// es5

let person1 = {
    name: name,
    age: age,
    address: 'chennai',
    sayName: function () { }
};

// es6
let addressType = "office"; // home | address | vacation
let person2 = {
    name,
    age,
    [addressType + "-address"]: 'chennai',
    [1 + 2 + 3]: 'six',
    sayName() { }
};

 */

//----------------------------------------------------------------
//  de-structuring
//----------------------------------------------------------------

// function display(tnr) {
//     console.log(`the trainer ${tnr.name}, teaching ${tnr.sub}`);
// }

// or

// function display({ name, age }) {
//     console.log(`the trainer ${name}, teaching ${sub}`);
// }

// or

// function display(tnr) {
//     let { name, sub } = tnr;
//     console.log(`the trainer ${name}, teaching ${sub}`);
// }

// let tnr = { name: 'Nag', sub: 'react' };
// display(tnr)


// e.g


// let person = {
//     name: 'Nag',
//     age: 35
// };

// manual de-structuring
// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person;
//or
// let { name, age } = person;

// let name, age;
// ({ name, age } = person);


// array de-structuring


// let nums = [10, 20, 30, 40, 50, 60, [70, 80]];

// let n1=nums[0];
// let n2=nums[1];
// let n3=nums[2];

// or

// let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = nums;



//----------------------------------------------------------------
// spread operator
//----------------------------------------------------------------

// e.g 1

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30];

// func(nums[0], nums[1], nums[2]); // spread
// or
// func(...nums);

// e.g 2

// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];

// let newArr = [...arr1, 4, 5, 6, ...arr2];


// e.g 3


// let o1 = { x: 1, y: 2 }
// let o2 = { z: 3, y: 20 }

// // let newO = Object.assign({}, o1, o2)
// // or
// let newO = { ...o2, ...o1 };





//----------------------------------------------------------------
// Arrow Function / Lambdas
//----------------------------------------------------------------


// let getPrice=function(){
//     return 100+200;
// }


// or


// let getPrice = () => {
//     return 100 + 200;
// }


// let getPrice = (count) => {
//     return count * (100 + 200);
// }
// or
// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
// or
// let getPrice = (count, tax) => count * (100 + 200) + tax;


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total
// }


// where / whey we need arrow-functions?


// use:1 : to make compact function-argument

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (x, y) { return x - y });
// or
// nums.sort((x, y) => { return x - y });
// or
// nums.sort((x, y) => x - y);


// use:2 : to capture 'this'
/* 
let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + ' teaching .js');
        // let askQues = function (q) {
        //     console.log(this.name + " asnwering " + q)
        // }
        // or
        let askQues = (q) => {
            console.log(this.name + " asnwering " + q)
        }
        console.log('teaching ends');
        return askQues;
    }
};

let askQues = tnr.doTeach();
// askQues.call(tnr, "Q1")
// or
askQues("Q1")

let enemyTnr = {
    name: 'subbu'
}

// askQues.call(enemyTnr, "Q2");
askQues("Q2") */




/* 
let regFunc = function () {
    console.log(this);
}
let arrFunc = () => {
    console.log(this);
}

// regFunc();
// arrFunc();

let o1 = {
    name: 'One',
    regFunc: regFunc,
    arrFunc: arrFunc
}
o1.regFunc();
o1.arrFunc(); */

// let o2 = { name: 'Two' }
// regFunc.call(o2);
// arrFunc.call(o2)


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed");
//     }
// }


// let invoice = {
//     num: 123,
//     process: () => {
//         console.log("INV-" + this.num + " processed");
//     }
// }


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed partially");
//         return function () {
//             console.log("INV-" + this.num + " processed partcompletlyially");
//         }
//     }
// }


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed partially");
//         return () => {
//             console.log("INV-" + this.num + " processed partcompletlyially");
//         }
//     }
// }

// let complete = invoice.process();
// complete();


//Quiz

/* 
function Person(name, age) {
    this.name = name;
    this.age = age;
    // let incAge = function () {
    //     this.age++;
    //     console.log(`${this.name} grown up to ${this.age}`);
    // }
    //or
    let incAge = () => {
        this.age++;
        console.log(`${this.name} grown up to ${this.age}`);
    }
    setInterval(incAge, 1000);// interval-event  emitted by window
}

new Person('Ria', 3); */


//-----------------------------------------------------------
// 9. symbol data-type
// 10. itertors
// 11. for-of-loop
//-----------------------------------------------------------



/*
    symbol ==> unique & immutable value, used as obj's identifier
*/

// let ibmSymbol = Symbol('key');
// let e = { name: 'Nag', [ibmSymbol]: '12345678' }


// let menu = [
//     "idly", "vada", "poori"
// ];

// for(let m of menu){
//     console.log(m);  
// }
// let newMenu = [...menu, "biryani"]
// let [m1, m2] = newMenu


/* 
let idBox = {
    [Symbol.iterator]: function () {
        let id = 0;
        return {
            next: function () {
                id++
                return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
            }
        }
    }
};

for (let id of idBox) {
    console.log(id);
}

let ids = [...idBox];

let [id1, id2] = idBox */

//---------------------------------------------------
// generator function
//---------------------------------------------------

function* gen() {
    let id = 0;
    while (true) {
        id++;
        yield id;
    }
}

let it = gen();