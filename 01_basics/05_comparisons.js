console.log("2" > 1); // OP: true
console.log("02" > 1); // OP: true
// Datatype conversions happened in both the above cases

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/* 
    Note: The reason for this weird behavious is that the equality
    check(==) and the comparison operators(<,>,<=,>=) work differently. 
    Comparison operators convert null to a number treating it as 0 
*/

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === operator
console.log("2" == 2); // true
console.log("2" === 2); // false
/* 
    === operator is used to do strict check
    Checks both value and datatype
*/
