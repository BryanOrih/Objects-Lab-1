// Problem 1

// Declare a JS object called carThree with
    // A property called wheels with a number value
    // A property called owner with a string value
    // A property called isBroken with a boolean value
    // A property called color with a string value
const carThree = {
    wheels: 4,
    owner: "Bob",
    isBroken: true,
    color: "blue"
}
// Use dot notation to add a new property called price with a number value
carThree.price = 20000
// Use bracket notation to add a new property called year with a number value
carThree["year"] = 1980
// Use dot notation to change the value of the isBroken property
carThree.isBroken = false
// Use dot notation to read the value of owner
console.log(carThree.owner)
// Create a new variable (not part of the object) called clientIsInterested that has no value.
let clientIsInterested = null;
// Check if car color is blue. If true, set clientIsInterested to true, else false.
if(carThree.color === 'blue'){
    clientIsInterested = true
}else{
    clientIsInterested = false
}
// Delete the owner property of carThree.
delete carThree.owner

// Problem 2

// Declare a JS object called store with
    // A property called profit with a number value
    // A property called manager with a string value
    // A property called isOpenNow with a boolean value
    // A property called isVeryExpensive with a boolean value
const store = {
    profit: 2000,
    manager: "Karen",
    isOpenNow: false,
    isVeryExpensive: false
}
// Use dot notation to add a new property called location with a string value
store.location = "3rd ave south bell wood st"
// Use bracket notation to add a new property called storeType with a string value
store["storeType"] = "COOL"
// Use dot notation to change the value of the isOpenNow property
store.isOpenNow = true;
// Use dot notation to read the value of isVeryExpensive 
console.log(store.isVeryExpensive)
// Create a new variable (not part of the object) called canShopHere that has no value.
let canShopHere = null;
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
store.isOpenNow && !store.isVeryExpensive ? canShopHere = true : canShopHere = false
// Delete the profit property of store.
delete store.profit


// Problem 3

 

// Declare a JS object called home with
    // A property called rooms with a number value
    // A property called bathrooms with a number value
    // A property called isForSale with a boolean value
    // A property called isInGoodLocation with a boolean value
const home = {
    rooms: 3,
    bathrooms: 3,
    isForSale: false,
    isInGoodLocation: true
}
// Use dot notation to add a new property called price with a number value
home.price = 300000
// Use bracket notation to add a new property called year with a number value
home["year"] = 2020
// Use dot notation to change the value of the isForSale property
home.isForSale = true
// Use dot notation to read the value of bathrooms
console.log(home.bathrooms)
// Create a new variable (not part of the object) called buyHouse that has no value.
let buyHouse = null;
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
home.isForSale && home.isInGoodLocation ? buyHouse = true : buyHouse = false
// Delete the isForSale property of home.
delete home.isForSale

// Problem 4, 5

// Declare a JS object with 4 properties (4 keys and 4 values).
const mansJourney = {
    name: "Zeno",
    betterThanOthers: true,
    values: ["money", "expectations", "virtue"],
}
// Use dot notation to add a new property.
mansJourney.disastrousEvent = true
// Use bracket notation to add a new property.
mansJourney["whereInTheJourney"] = "beginning"
// Use dot notation to change the value of one of the properties.
mansJourney.values = ["virtues", "control of oneself", "acceptance"]
// Use dot notation to read the value of one of the properties.
console.log(mansJourney.values)
// Create a new variable (not part of the object) that has no value.
let greatOpportunity = null;
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
mansJourney.disastrousEvent ? greatOpportunity = true : greatOpportunity = false
// Delete one of the object properties.
delete mansJourney.betterThanOthers


//Extra points
const conflictReaction = {
    belief: "I'm right",
    theirDisrespect: true,
    levelOfEmotion1_10: 10,
    typeOfEmotion: "aggression"
}
conflictReaction.ideology = "stoicism"
conflictReaction["controlOfMyself"] = true
conflictReaction.belief = "I have power over my own mind, not of external events"
let prosperity = null;
conflictReaction.controlOfMyself ? prosperity = true : prosperity = false
delete conflictReaction.typeOfEmotion

