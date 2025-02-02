/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The size of a shirt is ${size} and the printed message is "${message}".`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("Extra Large", "Made in Pakistan"); // Custom message, small size
