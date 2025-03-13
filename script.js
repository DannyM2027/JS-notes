/* This is a multi line comment
below is an example JS statement (statement is instructiion/command)
Every sattement ends with a semicolon (;)
console.log is a function that displays info 
*/

console.log("screw matthew");

// This is a single line comment


// Declare a new variable to hold some data
let pokemon; 

// ASSIGN a Value to that variable
// like putting an item in a box
pokemon = "Squirtle" ;
// Declare + Assign in one statement
let pokemon1 = "squirtle";

// u can "PASS IN" a variable into a func
console.log(pokemon);
console.log(pokemon1);

// Can CHANGE the value stored in a variable;
let mood = "Geeked";
mood = "Locked in";
console.log(mood);

// Can copy the value from one variable into another
let isGeeked = true;
let isLocked;
isLocked = isGeeked;
console.log(isLocked);

// MATH OPERATIONS
let score = 1;
score = score + 5;
console.log(score);
score = score - 3;
console.log(score);
score = score * 4;
console.log(score);
score = score / 2;
console.log(score);

score = (score **2 - 23 + 4) * 2 / 4;
console.log(score);

// STRING CONCATENATION (merging)
// Concatenate 2 string literals
// STRING LITERALS ARE CONTAINED IN QUOTE MARKS

let greeting = "Hello " + "friend";
console.log(greeting);

// Can combine variables with string literals
let username = "Dannyisaboss";
console.log("Welcome, " + username + "!!!");

// Concatenation will convert non string data
console.log( 4 + 5); // add numbers
console.log( "4" + 5);

// Incrments shortvut

let shlew = 4;
shlew++;
console.log(shlew);

let plew = 3;
plew--;
console.log(plew);

/* Functions:
    Reusable sets of code statements that perform a pecific task or process */

    // example of declaring a function

function night() {
    // 3 statements steps commands / instructions
    console.log("1. shower");
    console.log("2. teeth");
    console.log("3. bed");

}
// To CALL (run) our function, say its name
night();
night(); // repeated routine again

/* Funtions are like recipes
Reliably perform athe same set of actions for a consistent result
Parameters: are like ingredients/input
Return values are like the completed meal/OUTPUT
*/

// Sandwhich function example
//that reqs PARAMETERS and returns data

// (takes input, spits output)

function makeSandwich(bread, filling, sauce) {
    // Function BODY (process)
    let sandwich = filling + " sandwich with " + sauce + " on " + bread;
    return sandwich;
}
// Call a function that returns data
//store the output in a variable
let burger = makeSandwich("buns ",  "patty", "ketchup");
console.log(burger);


// TRY the function with differened arguments(input data)

let cyborg = makeSandwich("buns", "ketchup", "buns ketchup pickles cheese put that patty in between its burger what what its burger what what");
console.log(cyborg);