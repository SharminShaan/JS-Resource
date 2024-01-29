var x = 5;
var y = 6; 
var z = x + y;
document.getElementById("demo1").innerHTML ="The value of z is: " + z;


/*let cannot be re-declared
function scope [ var x = 5;
    function sleep(){}]

block scope [if(a=b){}] 
variables declared inside a {} block cannot be accessed from outside the block */

let x = 7;
if (true) {
    let x = 6;
    console.log(x);
}
console.log(x);

//var carName;
//carName = undefined;
carName = "Volvo";
var carName;
console.log(carName);

// let carName; [show error: temporal deadzone]
carName = "Volvo";
let carName;
console.log (carName);

/*let have block scope;
var have global scope
const cannot re-assigned*/

/*we can create a constant array:
const cars = ["Saab","Volvo","BMW"];

we can change an element:
cars[0] = "Toyota";

we can add an element:
cars.push("Audi"); 

as let
The x declared in the block is not same as the x declared outside the block/scope */


let x = 5 + 5;
let y "5" + 5;
let z = "Hello" + 5;

console.log(x);
console.log(y);
console.log(z);