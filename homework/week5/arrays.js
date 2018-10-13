// in this task i work with commands push, pop, shift, unshift & indexOf

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push ('turtle');
console.log(favoriteAnimals);

favoriteAnimals.shift(0);
favoriteAnimals.unshift('meerkat');
console.log("I think the array is: meerkat, capricorn, girrafe, turtle");
console.log(favoriteAnimals);

console.log("The array has a length of " + favoriteAnimals.length);

favoriteAnimals.pop(favoriteAnimals.length - 1);
console.log(favoriteAnimals);

// if i dont know the index of an element then i can use this command
let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + indexOfMeerkat);


