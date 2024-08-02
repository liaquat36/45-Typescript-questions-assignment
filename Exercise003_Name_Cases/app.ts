// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Liaquat"; // This stores a name

console.log(personName.toLowerCase()); // This prints a name in all small letters
console.log(personName.toUpperCase()); // This prints a name in ALL BIG LETTERS
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); // This prints a name with the First Letter Big