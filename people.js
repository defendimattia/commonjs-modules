
const objNames = require("./names.js")
const arrHobbies = require("./hobbies.js")

function peopleObj() {

    return {
        fullName : objNames("Mattia", "Defendi"),
        hobbies : arrHobbies("pc", "gym", "trekking")
    }
}

console.log(peopleObj())