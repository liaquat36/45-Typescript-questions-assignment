/*Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let placesOfWorld: string[] = ["Russia", "USA", "Australia", "Portugal", "France"];

console.log("Original order:", placesOfWorld);

console.log("Alphabetical order:", [...placesOfWorld].sort());

console.log("Original order:", placesOfWorld);

console.log("Reverse alphabetical order:", [...placesOfWorld].sort().reverse());

console.log("Original order:", placesOfWorld);

placesOfWorld.reverse();
console.log("Reversed order:", placesOfWorld);

placesOfWorld.reverse();
console.log("Original order:", placesOfWorld);

placesOfWorld.sort();
console.log("Alphabetical order:", placesOfWorld);

placesOfWorld.reverse();
console.log("Reverse alphabetical order:", placesOfWorld);