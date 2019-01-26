// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(x, y, cb){
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name
  * and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a,b) {
  return a + b;
}
let add2 = (a,b) => a + b;


function multiply(a,b){
  return a * b;
}
let multiply2 = (a,b) => a * b;


function greeting(first, last){
  return `Hello ${first} ${last}, nice to meet you!`;
}
let greeting2 = (a, b) => `Hello ${a} ${b}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

consume(2,2,add2); // 4
consume(10,16,multiply2); // 160
consume("Mary","Poppins", greeting2); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*
  Closures are a functions that are nested within another and can access the variables that exist
  within the the block that contains the function(this can go several layers deep) &
  not just immediate 'parent block'.
  Variables such as internal can be access later, even if the outside function(myFunction)
  completes(returns something).
 */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();