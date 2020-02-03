// name = 'Caleb Duke';
// var name;
// console.log(name);



// setName();
// function setName() {
//     var name = 'Covalence';
//     console.log(name);

// };

// console.log('some text');
// let avg = findAvg(2, 2);
// console.log('some text', avg);
// function findAvg(a, b) {
//     console.log('some text');
//     var answer = (a + b ) /2;
//     return answer;
// }



let fruits = ['apple', 'tomato', 'banana'];
let leastFav = fruits[2];

function printFruits() {
    let favFruits = fruits[1];
    // let leastFav = fruits[2];
    console.log(fruits[0]);
    
    function printFavFruits() {
        console.log(favFruits);
    };
    printFavFruits();
    console.log(leastFav)
    // function printLeastFav() {
    //     console.log(leastFav);
    // }
    // printLeastFav();
};

aRandomFunction();
function aRandomFunction() {
    console.log('Hello')
};

tacoFunction.call("Hello World")

let tacoFunction = function() {
   console.log("Hello World")
};



printFruits();

