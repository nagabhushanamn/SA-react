

// function* sum() {
//     console.log('in..');
//     var x = yield "give me x";
//     console.log(x);
//     var y = yield "give me y";
//     console.log(y);
//     var z = yield "give me z";
//     console.log(z);
//     return (x + y + z)
// }

//------------------------------------

function getBiryaniAsync() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('biryani')
        }, 3000);
    })
}

function getBeerAsync() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beer')
        }, 2000);
    })
}

function* getBiryaniAndBeer() {
    var biryani = yield getBiryaniAsync()
    var beer = yield getBeerAsync()
    console.log('yummy with ' + biryani + ", " + beer);
}