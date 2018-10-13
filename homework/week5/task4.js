// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    let vehicle = code === 1 ? "car" : code === 2 ? "motorbike" : "unknown vehicle";
    console.log("a " + color + " " + vehicle);
}

vehicleType("blue", 1);