// **************** DATATYPE CONVERSIONS IN JS *****************
// 1. Number
/*
    "100" => 100
    "100abc" => NaN
    null => 0
    undefined => NaN
    true => 1, false => 0
*/
let valueInNumber = Number("100abc") // valueInNumber = NaN
/* Note: NaN is a type in JS. When we try to convert a string to 
number that is not pure, it gets converted, but value becomes NaN*/

// 2. Boolean
/*
    1 => true, 0 => false
    "" => false
    "Nandini" => true
*/
