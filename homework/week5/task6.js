// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    let vehicle = code === 1 ? "car" : code === 2 ? "motorbike" : "unknown vehicle";
    let condition = age < 1 ? "new" : "used";
    console.log("a " + color + " " + condition + " " + vehicle);
}

vehicle("blue", 1, 5);