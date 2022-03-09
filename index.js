class Book {
	constructor(title, author, numberOfPages) {
		this.title = title;
		this.author = author;
		this.numberOfPages = numberOfPages;
	}

	displayAsLine() {
		return `TITLE: ${this.title}, AUTHOR: ${this.author}, NUMBER OF PAGES: ${this.numberOfPages}`;
	}

	displayAsBlock() {
		return `TITLE: ${this.title}
AUTHOR: ${this.author}
NUMBER OF PAGES: ${this.numberOfPages}`;
	}

	// factory pattern
	static instantiateBook(title, author, numberOfPages) {
		return new Book(title, author, numberOfPages);
	}
}

class Books {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	getBooksAsArray() {
		return this.books.map(book => book.displayAsLine());
	}

	listBooks() {
		return this.getBooksAsArray().join('\r\n');
	}
}

// code smell
const book = Book.instantiateBook('Sapiens', 'Yuval Harari', 543);
const book2 = new Book('JavaScript Functional Programmign', 'Federico Kereki', 433);
// console.log(book.displayAsLine());
// console.log(book2.displayAsBlock());
// console.log(book.displayAsBlock());

const books = new Books();
books.addBook(book);
books.addBook(book2);
console.log(books.listBooks());