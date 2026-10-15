function isElevatorSafe(weights) {
  // Here is my code...
  // My own written code...
  let totalWeight = 0;

//Invalid string check.
if(!Array.isArray(weights)){
    return "Invalid";
}

for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
    
}
if (totalWeight <= 400) {
    return true;
}
else {
    return false;
}
// return totalWeight;

}

let weights = "50, 60, 65, 45, 35, 100,78" ;
console.log(isElevatorSafe(weights));
