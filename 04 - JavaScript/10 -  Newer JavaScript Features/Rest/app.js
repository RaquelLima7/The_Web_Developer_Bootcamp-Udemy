// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// COLLECT THE "REST" IN NUMS:
function sum(...nums) {   // needs to use a ... to puts the elements inside the array
    return nums.reduce((total, el) => total + el)  // now nums is an array so we can use this method
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
