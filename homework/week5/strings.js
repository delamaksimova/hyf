
// substituting commas with spaces in strings

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
let myNewString = myString.replace(/,/g, " ");
console.log(myNewString);