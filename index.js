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

// code smell
const book = Book.instantiateBook('Sapiens', 'Yuval Harari', 543);
const book2 = new Book('JavaScript Functional Programmign', 'Federico Kereki', 433);

// console.log(book.displayAsLine());
// console.log(book2.displayAsBlock());

console.log(book.displayAsBlock());

