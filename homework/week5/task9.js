// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color, code, age) {
    let vehicles = ["motorbike", "caravan", "bike", "car"];
    let condition = age < 1 ? "new" : "used";
    console.log("a " + color + " " + condition + " " + vehicles[code - 1]);
}

vehicle("blue", 1, 5);