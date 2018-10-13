
let x = [1,2,3];
let y = [1,2,3];
let z = y;

// my guess: x == y (false), x === y (true) and z == y (true) and z == x (false)

console.log(x == y); // false
console.log(x === y); // false 
console.log(z == y); // true
console.log(z == x); // false


