
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2; // the order matters since here we create a new variable o3 and clone/assign the value of o2

o2.foo = ' ';

console.log(o3); // by changing o2 we change o3


