// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}


const drivers = ["Sam", "Sarah", "Sally", "Sandra", "Saul"];
console.log(findMatching(drivers, "sarah"));
console.log(fuzzyMatch(drivers, "Sa"));

const driverObjects = [
    { name: "Sam", hometown: "New York" },
    { name: "Sarah", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Chicago" },
    { name: "Sandra", hometown: "San Francisco" },
    { name: "Saul", hometown: "Boston" }
];
console.log(matchName(driverObjects, "Sally"));