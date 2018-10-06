/* Task 1. Write a console.log statement saying "Hello World!"

let english = "Hello World!";
let russian = "Zdravstvuy Mir!";
let swedish = "Hej Världen!";

console.log(swedish);
*/

/* Task 2. Solved with ""
console.log("I'm awesome");
*/

/* Task 3
let x;
console.log('the value of my variable x will be: undefined');
console.log(x);
x = 6;
console.log('the value of my variable x will be: 6');
console.log(x);
*/

/* Task 4
let y = 'Sweden'
console.log('the value of my string will be: Sweden')
console.log(y)
y = 'Malmö'
console.log('the value of my string will be: Malmö')
console.log(y)
*/

/* Task 5
let z = 7.25
console.log(z)
let a = Math.round(z)
console.log(a)
if (a<z) {
    console.log(z)
} else {
    console.log(a)
}
*/

/* Task 6
let thisIsAnArray = []
console.log('this is my array')
console.log(thisIsAnArray)
let favAminals = ["dogs", "cats", "pandas"]
console.log(favAminals)
favAminals.push("baby pigs")
console.log(favAminals)
*/

/* Task 7
let myString = "this is a test"
console.log(myString)
console.log(myString.length)
*/

/* Task 8
let var1 = 1
console.log('The value of my first variable is: ' + var1);
let var2 = "two"
console.log('The value of my second variable is: ' + var2);
let var3 = [3, 4, 5]
console.log('The value of my third variable is: ' + var3);
let var4 = 5
console.log('The value of my fourth variable is: ' + var4);

console.log('type of my first variable is: number')
console.log(typeof(var1))
console.log('type of my second variable is: string')
console.log(typeof(var2))
console.log('type of my third variable is: object')
console.log(typeof(var3))
console.log('type of my fourth variable is: number')
console.log(typeof(var4))

if (
    typeof(var1) === typeof(var2) ||
    typeof(var1) === typeof(var3) ||
    typeof(var1) === typeof(var4) ||
    typeof(var2) === typeof(var3) ||
    typeof(var2) === typeof(var4) ||
    typeof(var3) === typeof(var4)
    ) {
console.log('SAME TYPE')
} 
*/

/* Task 9
let x = 7
x = x % 3
console.log("% is modulus or remainder operator")
console.log("in the given example when the variable is equal 7 the remainder after dividing it with 3 is:")
console.log(x)
*/

/* Task 10.1
console.log("Arrays can have elements of different types. Let's consider this array with strings")
let myArray = ['Dela', 'Lund']
console.log(myArray)
console.log("Now we create a variable 'age'")
let age = 27
console.log(age)
console.log("The type of the age varable is:")
console.log(typeof(age))
console.log("Now we push the age to our array of strings. And the result looks like:")
myArray.push(age)
console.log(myArray)
*/

let var1 = 6/0
let var2 = 10/0
console.log("When assigning variables to 6/0 and 10/0 we get the following result:")
console.log(var1, var2)
if (var1 === var2) {
    console.log("We can compare var1 and var2, therefore can compare infinities")
} else {
    console.log("We can't compare var1 and var2, therefore can't compareinfinities")
}









