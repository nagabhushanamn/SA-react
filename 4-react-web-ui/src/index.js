console.log('-index.js-');

import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//-----------------------------------------------
// step-1: define component's class
//-----------------------------------------------
/*
    <div class="alert alert-info">
        <span class="badge badge-primary">hello..</span>
    </div>
*/
//-----------------------------------------------
// using pure-javscript
//-----------------------------------------------
// class Greeting extends Component {
//     render() {
//         let spanEle = React.createElement('span', { className: 'badge badge-primary' }, "hello")
//         let divEle = React.createElement(
//             'div',
//             { className: 'alert alert-info' },
//             spanEle)
//         return divEle
//     }
// }
//-----------------------------------------------
// using JSX
//-----------------------------------------------
class Greeting extends Component {
    render() {
        return (
            <div className="alert alert-info">
                <span className="badge badge-primary">hello..</span>
            </div>
        )
    }
}
//-----------------------------------------------
//step-2 : instantiate component' class & render to virtual DOM
//-----------------------------------------------

// let greeting1 = React.createElement(Greeting, null, null);
//or
let greeting1=<Greeting />
ReactDOM.render(greeting1, document.getElementById('root'));