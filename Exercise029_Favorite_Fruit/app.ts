/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[] = ["mangoes", "melons", "bananas"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("mangoes")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("melons")) {
    console.log("You really like melons!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("kiwies")) {
    console.log("You really like kiwies!");
}

