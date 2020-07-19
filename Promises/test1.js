// synchronous
//
// fetch("http://google.com");
//
// hello("HELLO");
//
// console.log('Hardik Shakya');
//
//
// asynchronous
//
//
// db.query("SELECT users", function(result){
//
//
//     console.log(result);
//
// });
//
// console.log("something else");
//


let myPromise = new Promise((resolve, reject) => {

    let isComplete = true;

    if(isComplete){

        resolve("This is complete");

    } else {

        reject("This is NOT complete");

    }

});

myPromise.then((result) => {

    console.log(result);

}, (error) => {

    console.log(error);

});

console.log('Hardik Shakya');
