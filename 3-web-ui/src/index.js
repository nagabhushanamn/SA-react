console.log("-index.js-");


//--------------------------------------------------------
// pack1/mod1.js

// var ibm = ibm || {};
// ibm.mod1.doWork();

//--------------------------------------------------------

// require('bootstrap/dist/css/bootstrap.css');
// or
import 'bootstrap/dist/css/bootstrap.css'

// let mod = require('ibm-oct-greet');
// or
import mod from 'ibm-oct-greet';
mod.sayName();
mod.greet('en');
mod.greet('es');
mod.greet();

let _ = require('lodash');

let diff = _.difference([2, 1], [2, 3]);
console.log(diff);

//--------------------------------------------------------

import primaryItem from './hotel/menu';
// primaryItem=null; // errror
primaryItem.price = 100;
console.log(primaryItem);

// import { hydBiryani, chennaiBiryani } from './hotel/menu';
// import { hydBiryani as hydSpl, chennaiBiryani as chnSpl } from './hotel/menu';
// import * as items from './hotel/menu'

//--------------------------------------------------------
