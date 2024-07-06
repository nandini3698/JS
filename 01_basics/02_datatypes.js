// JS is a dynamically typed language
/*
    Datatypes are put into two categories:
    1. Primitive (7) - Call by value
        String
        Number
        Boolean
        null (Standalone value)
        undefined (Value unassigned)
        Symbol (used for uniqueness)
        BigInt
    2. Non-primitive or Reference (3) - Call by Reference
        Array
        Object
        Function
    The difference b/w the two lies in how you store this data
    in memory and access this data from memory
*/

// No concepts of floats or real. Everything is number
const score = 100
const realscore = 100.50

const myName = "Nandini"
let myAge;

// To store a bigint in bigint datatype, put an 'n' at the end
const bigNumber = 100000000000000009n

// We can also store a number in bigint datatype
const smallNumber = 10n

/* If we try to store bigint data in number datatype, it does type 
conversion of the bigint data to number data which alters the data 
value too */
const bigNumber1 = 100000000000000456789
console.log(bigNumber1); // 100000000000000460000

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined gets assigned to it

// Makes variables unique even if we pass the same value to it
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // false

// Non-Primitive Types

const hardware = ["motherboard", "cpu", "harddisk"]

let myObj = {
    name: "Nandini",
    age: 26,
}

const myFunction = function(){
    console.log("Hello World!");
}

/********* To check type of any datatype use typeof *********/

// Expected behaviour
console.log(typeof score); // number
console.log(typeof myName); // string
console.log(typeof smallNumber); // bigint
console.log(typeof isLoggedIn); // boolean
console.log(typeof myAge); // undefined

// Gives undefined for a variable that is absent
console.log(typeof x); // undefined

// Gives object for null
console.log(typeof outsideTemp); // object

// Gives object for all non-primitive types
console.log(typeof hardware); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
