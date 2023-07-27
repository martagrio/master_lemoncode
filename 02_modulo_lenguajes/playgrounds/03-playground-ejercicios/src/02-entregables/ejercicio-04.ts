console.log("************** DELIVERABLE 04 *********************");
console.log('********** 4. Read Books con opcional **********');

interface Book {
    title: string;
    isRead: boolean;
}

const booksExample: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string): boolean {
    return books.some(book => book.title === titleToSearch && book.isRead);
}

console.log(isBookRead(booksExample, "Devastación")); // true
console.log(isBookRead(booksExample, "Canción de hielo y fuego")); // false
console.log(isBookRead(booksExample, "Los Pilares de la Tierra")); // false
