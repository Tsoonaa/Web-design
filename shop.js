// Keeping track of flower quantity and price here
const flowerData = [
	{name: 'Flower 1', quantity: 0, cost: 10},
	{name: 'Flower 2', quantity: 0, cost: 15},
	{name: 'Flower 3', quantity: 0, cost: 20},
	{name: 'Flower 4', quantity: 0, cost: 25},
	{name: 'Flower 5', quantity: 0, cost: 30},
	{name: 'Flower 6', quantity: 0, cost: 60},
]

/**
 * Calculates updated basket cost and updates text
 */
function updateTotalCost() {
	let totalCost = 0
	for(let i=0; i<flowerData.length; i++){
		// iterate over each item in the basket and add item quantity x cost to the total
		totalCost += flowerData[i].quantity * flowerData[i].cost
	}
	document.getElementById("total_cost").innerHTML = `Total Purchase: ${totalCost}`
	sessionStorage.setItem('total_cost', totalCost)
}

/**
 * Adds flower to basket and updates the text in the shopping cart section
 */
function addFlower(index) {
	flowerData[index].quantity += 1
	document.getElementById(`flower_index_${index}_quantity`).innerHTML = `no. ${flowerData[index].quantity}`
	updateTotalCost()
}

/**
 * Removes a flower from the basket and updates the text in the shopping cart section
 */
function removeFlower(index) {
	if(flowerData[index].quantity > 0){
		// Only decrement quantity if current quantity is greater than 0 so we don't get negative quanitities
		flowerData[index].quantity -= 1
		document.getElementById(`flower_index_${index}_quantity`).innerHTML = `no. ${flowerData[index].quantity}`
		updateTotalCost()
	}
}

/**
 * Validate basket and checkout
 */
function validateBasketAndCheckout() {
	// Check how many items are in the basket
	let itemsInBasketCount = 0
	for(let i=0; i<flowerData.length; i++){
		itemsInBasketCount += flowerData[i].quantity 
	}	
	if( itemsInBasketCount === 0) {
		// If there are no items in the basket, alert user
		alert("You need at least one or more items before you can go checkout.")
		return
	} else {
		window.location.href = "checkOut.html";
	}
}



