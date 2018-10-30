

console.log('-index.js-')

// -------------------------------------------------------------
// using DOM API
// -------------------------------------------------------------

let alertBox = document.querySelector('.alert-info')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let greetBtn = document.querySelector('.btn-success')

showBtn.addEventListener('click', e => alertBox.style.display = '')
hideBtn.addEventListener('click', e => alertBox.style.display = 'none')
greetBtn.addEventListener('click', e => alertBox.innerHTML = "good morning")

// -------------------------------------------------------------



// -------------------------------------------------------------
// using XHR API / Fetch API  ==>  todo async http-request
// -------------------------------------------------------------

let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    let api = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let todosBox = document.querySelector('.card-body');
    fetch(api)
        .then(response => response.json())
        .then(todos => {
            let arr = [];
            todos.forEach(todo => {
                let liElement = `
                    <li class="list-group-item">
                        <span class="badge badge-danger">${todo.id}</span><label>${todo.title}</label>
                    </li>
                `
                arr.push(liElement)
            })
            todosBox.innerHTML = arr.join(" ");
        })
})



// -------------------------------------------------------------
// timer API
// -------------------------------------------------------------


let timeSpan = document.getElementById('timeSpan');

setInterval(() => {
    timeSpan.innerText = new Date().toLocaleTimeString();
});