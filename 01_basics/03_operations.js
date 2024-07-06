let x = 3
console.log(-x); // OP: -3

// Mathematical operations supported like +, -, *, %, **(means to the power of)

let str1 = "Nandini"
let str2 = " Roy"
console.log(str1+str2);

// Complex Situations
console.log("1" + 2); // OP: 12
console.log("1" + 2 +2); // OP: 122
console.log(1 + 2 + "2"); // 32
/* Note: Better to avoid such confusing syntaxes and try using parantheses to
mention which operation to do first Eg. ((3+4)*5%3)*/

console.log(+true); // OP: 1
console.log(+""); // OP: 0
// Here type conversion is happening because of + operator

let a, b, c
a = b = c = 2+2 // a=b=c=4

// Prefix and Postfix operators
let counter = 100
console.log(counter++); // OP: 100
console.log(counter); // OP: 101
console.log(++counter); // OP: 102

// To Study: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
