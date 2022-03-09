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
}

const book = new Book('Sapiens', 'Yuval Harari', 543);

// console.log(book.displayAsLine());
console.log(book.displayAsBlock());

