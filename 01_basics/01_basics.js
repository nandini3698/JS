"use strict" // Instructs engine to treat all code as newer version of JS. Currently by default all code is treated as newer version

// alert( 3+3) /* will give [ReferenceError: alert is not defined] as we are using node js and not browser */

// Variables
/*
    Immutable Variables - Cannot be changed once declared and value assigned. 
    If tried to change, it will throw error while executing the code
    Types of Variables in JS:
    1. const - Immutable variable
    2. var - Mutable variable (Preferred not to use because of issues in block and functional scope)
    3. let - Mutable variable
    4. In JS we can also declare a variable and reserve it’s memory without prefixing it with any type
    5. In JS if we just declare a variable without assigning it a value, it takes a value as undefined
*/

// Datatypes
/*
    Primitive: number, bigint, string, boolean, null (Standalone value), undefined (Value unassigned)
    Non Primitive: symbol(used for uniqueness), object
*/

// Some exceptional cases around datatypes in JS
console.log(typeof null); // OP: object
console.log(typeof undefined); // OP: undefined
