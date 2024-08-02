/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// Equality with strings
console.log("Testing equality with strings:");
console.log("Apple" == "Apple"); // True
console.log("Tomato" !== "Tomato"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
console.log("Mango".toLowerCase() == "Mango"); // False

// Numerical tests
console.log("Numerical tests:");
console.log(13 > 7); // True
console.log(8 < 2); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(false && false); // True
console.log(true || true); // False

// Test whether an item is in a array
let fruits = ["orange", "pineapple", "kiwi"];
console.log("Is 'orange' in fruits?");
console.log(fruits.includes("orange")); // True

// Test whether an item is not in a array
console.log("Is 'grape' not in fruits?");
console.log(!fruits.includes("grape")); // True