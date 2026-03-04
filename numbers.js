let a  = 0o77;
console.log(a); // 63
// rounding functions
Math.floor(3.9); // 3 niche
Math.ceil(3.1); // 4 upper
Math.round(3.5); // 4 nearest
Math.round(-3.5); // -3 nerest
Math.trunc(3.9); // 3 remove decimal part

// 5. Precision Problem (Important!):

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false    
// To solve this problem, we can use the toFixed() method to round the result to a specific number of decimal places:
let sum = 0.1 +0.3;
let b =  sum.toFixed(1);
console.log(b); // 0.4

// string se number export krna
let aaa = "234";
console.log(typeof(parseInt(aaa)));