// Task 10-11

let vehicles = ["motorbike", "caravan", "bike", "car", "bus"];

// make a function that pluralizes a word
function pluralize(word) {
    plural = word[word.length - 1] === 's' ? word + 'es' : word + 's';
    return plural;
}

function printAd() {
    // create a variable to which we append/add elements from for-loop
    let vehicleAd = "Amazing Joe's Garage, we service ";

    // set 2 conditions in a for-loop body: 1 - to append pluralized words, 2 - to append commas/and 
    for(i = 0; i < vehicles.length; i++) {
        vehicleAd += pluralize(vehicles[i]);
        if (i < vehicles.length - 2) vehicleAd += ", ";
        else if (i === vehicles.length - 2) vehicleAd += " and ";
    }

    console.log(vehicleAd + ".");
}

// Task 10.
printAd();

// Task 11. Adding extra element to the array

vehicles.push("trolleybus");

printAd();
