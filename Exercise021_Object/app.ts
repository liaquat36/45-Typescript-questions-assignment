// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book: { title: string; author: string; yearPublished: number } = {
    title: "The Harry Potter",
    author: "J.K. Rowling",
    yearPublished: 1996
};
console.log(`Name of Book: ${book.title} by ${book.author}, published in ${book.yearPublished}`);