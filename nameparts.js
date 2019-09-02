const fullName = "tomas STUDENT solTES";
const fullNameLowerCase = fullName.toLowerCase();

let nameArray = fullNameLowerCase.split(" ");
let firstName = nameArray[0];
let middleName = nameArray[1];
let lastName = nameArray[2];


function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log("First name: ", capitalizeFirstLetter(firstName));
console.log("Middle name: ", capitalizeFirstLetter(middleName));
console.log("Last name: ", capitalizeFirstLetter(lastName));