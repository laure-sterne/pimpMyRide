let trips = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

// Step 1 : Parsing two trips
function parseTrip(trip) {
	var arr = trip.split(" ");
	return { client: arr[0], start: parseInt(arr[1]), duration: parseInt(arr[2]), price: parseInt(arr[3]) };
}

// Step 2 : Parsing plural trips with loop
function parseTrips(trips) {
	var passengers = [];
	for (var i = 0; i < trips.length; i++) {
		passengers.push(parseTrip(trips[i]));
	}
	return passengers
}

var newPassengers = parseTrips(trips);

// Step 3 : get better sequence flights to be more profitable
function getTripsPrice(trips) {
	var sum = 0
	for (let i = 0; i < trips.length; i++) {
		sum += trips[i].price;
	}
}

getTripsPrice(newPassengers)


// Step 4 : check compatibility between two trips
function checkCompatibility(tripA, tripB) {
	var arrivalTime = tripA.start + tripA.duration
	if (arrivalTime > tripB.start) {
		return false
	}
	else {
		return true
	}
}
// console.log(checkCompatibility(newPassengers[0], newPassengers[2]))

// Step 5 : give all possibilities with all trips
function findCompatibility(newPassengers) {
	var result = [];
	newPassengers.forEach(function (newPassenger, i) {
		result.push([newPassenger])
		for (let j = i + 1; j < newPassengers.length; j++) {
			if (checkCompatibility(newPassengers[i], newPassengers[j]) === true) {
				result.push([newPassengers[i], newPassengers[j]])
			}
		}
	})
	return result
}
let compatible = findCompatibility(newPassengers)
console.log(compatible)

// Step 6 : return the combinaison or trip which is more profitable for the company
function findBestPrice(comparativeTrips){
	var bestPrice = 0
	var combinaisonWinner = []

	comparativeTrips.forEach((compatibilities, i) => {		
		console.log("i am index i ", i)
		console.log("i am an array of compatible trips ", compatibilities)
		let priceCompatibilities = 0
		let combinaison = []

		compatibilities.forEach((trip, j) => {
			console.log("i am index j ", j)
			console.log("i am a combinaison of trips ", trip)

			priceCompatibilities += trip.price
			combinaison.push(trip)
			
			console.log("i am the price of a trip : ", trip.price)
		})

		if (priceCompatibilities >= bestPrice){
			bestPrice = priceCompatibilities
			combinaisonWinner.push(combinaison)
		}
		
		console.log("i am the sum of compabilities : ", priceCompatibilities)
	})

	return console.log("the best price is", bestPrice, "euros with the following combinaison", combinaisonWinner[combinaisonWinner.length -1])
}

findBestPrice(compatible)