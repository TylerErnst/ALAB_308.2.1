// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
const growthRadius = 5;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const initialArea = PI * growthRadius * growthRadius;
console.log(`Initial area available: ${initialArea.toFixed(2)}m²`);
// Each plant requires a minimum space of 0.8 square meters.
const requiredAreaPerPlant = 0.8;
// The area is starting with 20 plants.
const initialStartingPlants = 20;
// The plants double in number every week.
const growthRate = 2;


console.log('\n\n\n\nPart 1\n\n\n');

// Using this information, your objectives are to:

// Predict the plant growth after a specific number of weeks.
let weeksGrown = 0;
console.log(`Weeks grown: ${weeksGrown}`);
let totalPlants = initialStartingPlants*(growthRate**weeksGrown);
console.log(`Total plants: ${totalPlants}`);
let requiredArea = totalPlants*requiredAreaPerPlant;
console.log(`Area needed: ${requiredArea}m²`);
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
if (requiredArea > initialArea*.8){
    console.log('Prune plants.');
}
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
else if (requiredArea  > initialArea*.5){
    console.log('Plants should be monitored.');
}
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
else {
    console.log('There is room to plant more.');
}
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

for (let i = 1; i <= 3; i++){ //Week 1 through to week 3
    console.log(" "); //Formating
    weeksGrown = i; //Current week
    console.log(`Weeks grown: ${weeksGrown}`);
    totalPlants = initialStartingPlants*(growthRate**weeksGrown);
    console.log(`Total plants: ${totalPlants}`);
    requiredArea = totalPlants*requiredAreaPerPlant;
    console.log(`Area needed: ${requiredArea}m²`);

    if (requiredArea > initialArea*.8){
        console.log('Prune plants.');
    }else if (requiredArea > initialArea*.5){
        console.log('Plants should be monitored.');
    }else {
        console.log('There is room to plant more.');
    }
}

console.log('\n\n\n\nPart 2\n\n\n');


// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants,
// and did not prune them for 10 weeks.
let StartingPlants = 100;
weeksGrown = 10;
console.log(`Weeks grown: ${weeksGrown}`);
totalPlants = StartingPlants*(growthRate**weeksGrown);
console.log(`Total plants: ${totalPlants}`);
requiredArea = totalPlants*requiredAreaPerPlant;
console.log(`Area needed: ${requiredArea}m²`);
// If the space remained circular, what would be the radius of this expanded garden?
let newGrowthRadius = Math.sqrt(requiredArea/PI);
console.log(`Radius needed: ${newGrowthRadius.toFixed(2)}m`);


console.log('\n\n\n\nPart 3\n\n\n');


// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in
// the original 5-meter-radius garden.
StartingPlants = 100;
requiredArea = StartingPlants*requiredAreaPerPlant;
console.log(`Starting plants: ${StartingPlants}`);
console.log(`Area needed: ${requiredArea}m²`);
console.log(`Area available: ${initialArea.toFixed(2)}m²`);
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the
// originally provided number of plants exceeds the amount of space available, throw a new error and log an
// appropriate message.

try {
    if (requiredArea < initialArea){
        console.log('There is enough space available.');
    }else{
        throw "Error - Not enough space available.";
    }
} catch (error) {
    console.log(error);
}

//old code bellow












































// weeksGrown = 1;
// console.log(`\nWeeks grown: ${weeksGrown}`);
// totalPlants = initialStartingPlants*(growthRate**weeksGrown);
// console.log(`Total plants: ${totalPlants}`);
// requiredArea = totalPlants*requiredAreaPerPlant;
// console.log(`Area needed: ${requiredArea}m²`);

// if (requiredArea > initialArea*.8){
//     console.log('Prune plants.');
// }else if (requiredArea > initialArea*.5){
//     console.log('Plants should be monitored.');
// }else {
//     console.log('There is room to plant more.');
// }

// weeksGrown = 2;
// console.log(`\nWeeks grown: ${weeksGrown}`)
// totalPlants = initialStartingPlants*(growthRate**weeksGrown);
// console.log(`Total plants: ${totalPlants}`)
// requiredArea = totalPlants*requiredAreaPerPlant;
// console.log(`Area needed: ${requiredArea}m²`);

// if (requiredArea > initialArea*.8){
//     console.log('Prune plants.');
// }else if (requiredArea > initialArea*.5){
//     console.log('Plants should be monitored.');
// }else {
//     console.log('There is room to plant more.');
// }


// weeksGrown = 3;
// console.log(`\nWeeks grown: ${weeksGrown}`);
// totalPlants = initialStartingPlants*(growthRate**weeksGrown);
// console.log(`Total plants: ${totalPlants}`);
// requiredArea = totalPlants*requiredAreaPerPlant;
// console.log(`Area needed: ${requiredArea}m²`);

// if (requiredArea > initialArea*.8){
//     console.log('Prune plants.');
// }else if (requiredArea > initialArea*.5){
//     console.log('Plants should be monitored.');
// }else {
//     console.log('There is room to plant more.')
// }
