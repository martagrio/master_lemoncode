console.log('********** 4. Read Books con opcional **********');

/* Renombro a isBookRead1 porque si no me salta error 
con ts al tener ya una llamada así (Ejercicio 110) */

interface Book {
    title: string;
    isRead: boolean;
}

const booksExample: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead1(books: Book[], titleToSearch: string) : boolean {
    return books.some(book => book.title === titleToSearch && book.isRead);
}

console.log(isBookRead1(booksExample, "Devastación")); // true
console.log(isBookRead1(booksExample, "Canción de hielo y fuego")); // false
console.log(isBookRead1(booksExample, "Los Pilares de la Tierra")); // false