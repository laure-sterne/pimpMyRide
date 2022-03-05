let oneTrip = "Roger 0 5 10";

let trips = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

class Trip {

    constructor(name, start, duration, price, end) {
        this.name = name
        this.start = start
        this.duration = duration
        this.price = price
		// Step 3 : calculate the arrival time of a flight
		this.end = start + duration
    }

	// Step 4 : check compatibility between two trips
	isCompatible(trip) {
		if (trip.end == this.start) {
			console.log("heure de fin ", trip.end)
			console.log("heure de départ ", this.start)
			return false
		} else {
			console.log("heure de fin ", trip.end)
			console.log("heure de départ ", this.start)
			return true
		}
	}

	// var newPassengers = parseTrips(trips);

	// function checkCompatibility(tripA, tripB) {
	// 	var arrivalTime = tripA.start + tripA.duration
	// 	if (arrivalTime > tripB.start) {
	// 		return false
	// 	}
	// 	else {
	// 		return true
	// 	}
	// }
	// console.log(checkCompatibility(newPassengers[0], newPassengers[2]))

}

// Step 1 : Parsing one trip
function parseTrip(trip) {
	var arr = trip.split(" ");
	return new Trip(arr[0], parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]));
};

// console.log(parseTrip(oneTrip))

// Step 2 : Parsing plural trips with loop
function parseTrips(trips) {
	var passengers = [];
	for (var i = 0; i < trips.length; i++) {
		passengers.push(parseTrip(trips[i]));
	}
	return passengers
}

var newPassenger = parseTrips(trips)
console.log(newPassenger)

let voyage = newPassenger[1]
let anotherTrip = newPassenger[0]
console.log("je suis un voyage ", voyage)
console.log("je suis un autre voyage ", anotherTrip)
console.log(voyage.isCompatible(anotherTrip))

// // Step 3 : get better sequence flights to be more profitable
// function getTripsPrice(trips) {
// 	var sum = 0
// 	for (let i = 0; i < trips.length; i++) {
// 		sum += trips[i].price;
// 	}
// }

// getTripsPrice(newPassengers)


// // Step 5 : give all possibilities with all trips
// function findCompatibility(newPassengers) {
// 	var result = [];
// 	newPassengers.forEach(function (newPassenger, i) {
// 		result.push([newPassenger])
// 		for (let j = i + 1; j < newPassengers.length; j++) {
// 			if (checkCompatibility(newPassengers[i], newPassengers[j]) === true) {
// 				result.push([newPassengers[i], newPassengers[j]])
// 			}
// 		}
// 	})
// 	return result
// }
// let compatible = findCompatibility(newPassengers)
// console.log(compatible)


// // Step 6 : return the combinaison or trip which is more profitable for the company
// function findBestPrice(comparativeTrips){
// 	var bestPrice = 0
// 	var combinaisonWinner = []

// 	comparativeTrips.forEach((compatibilities, i) => {		
// 		console.log("i am index i ", i)
// 		console.log("i am an array of compatible trips ", compatibilities)
// 		let priceCompatibilities = 0
// 		let combinaison = []

// 		compatibilities.forEach((trip, j) => {
// 			console.log("i am index j ", j)
// 			console.log("i am a combinaison of trips ", trip)

// 			priceCompatibilities += trip.price
// 			combinaison.push(trip)
			
// 			console.log("i am the price of a trip : ", trip.price)
// 		})

// 		if (priceCompatibilities >= bestPrice){
// 			bestPrice = priceCompatibilities
// 			combinaisonWinner.push(combinaison)
// 		}
		
// 		console.log("i am the sum of compabilities : ", priceCompatibilities)
// 	})

// 	return console.log("the best price is", bestPrice, "euros with the following combinaison", combinaisonWinner[combinaisonWinner.length -1])
// }

// findBestPrice(compatible)