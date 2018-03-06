let airlinesObject = require("./res/airlines.json");

function getAirlineName(iataCode) {
    let airline = [];
    airlinesObject.filter(function (element) {
        if (element["IATACode"] == iataCode) {
            return airline.push(element["Airline"]);
        } 
    });

    return airline.length>0?airline.toString():noSuchAirlineFoundError;
}

let noSuchAirlineFoundError = {
    code: "NAF",
    message: "We could not find the specified airline related to your IATA code, if you think this is a mistake please raise an issue at https://github.com/malaymatwankar/airlines-iata-codes/issues"
}

module.exports = { getAirlineName: getAirlineName };