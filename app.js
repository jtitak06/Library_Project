console.log("Hello World!\n==========\n");
//let title = document.getElementById("title");
//let author = document.getElementById("author");
//let checkbox = document.getElementById("libraryCheckbox");
//let tbody = document.getElementById("tbody");
//let form = document.getElementsByTagName("form");
//console.log(form);


class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }

    markRead() {
        this.read = !this.read;
    }
//    addBook(title, author, read) {
//        let newBook = new Book(title, author, read);
//        this.books.push(newBook);
//        this.bookCount++;
//    }
}

//const newBook = new Book(2, "Harry Potter", "J.K. Rowling", true);
//console.log(newBook);

class Library {
    constructor() {
        this.DOMelements = {
            title: document.getElementById("title"),
            author: document.getElementById("author"),
            hasRead: document.getElementById("libraryCheckbox"),
            form: document.querySelector("#form"),
            tbody: document.querySelector("#table > tbody"),
        };
    
    this.DOMelements.form.addEventListener("submit", (event) => {
        event.preventDefault();

        this.addBook(
            this.DOMelements.title.value,
            this.DOMelements.author.value,
            this.DOMelements.hasRead.checked
        );

        this.DOMelements.title.value = "";
        this.DOMelements.author.value = "";
        this.DOMelements.hasRead.checked = false;
    });

    this.BookCount = 1;
    this.books = [new Book("Name of the Wind", "Patrick Rothfuss", true)];

    this.books.forEach((book) => this.updateDOM(book));
};

addBook(title, author, read) {
    let newBook = new Book(title, author, read);
    this.books.push(newBook);
    this.bookCount++;

    this.updateDOM(newBook);
};

    updateDOM(book) {
        console.log(book);
        let tr = document.createElement("tr");
        let tdTitle = document.createElement("td");
        tdTitle.textContent = book.title;
        let tdAuthor = document.createElement("td");
        tdAuthor.textContent = book.author;
        let tdRead = document.createElement("td");
        let readCheckbox = document.createElement("input");
        readCheckbox.addEventListener("change", () => {
        book.markRead();
        tr.style.backgroundColor = book.read ? "#DDD" : "#FFF";
        });
        readCheckbox.type = "checkbox";
        readCheckbox.checked = book.read;
        tdRead.appendChild(readCheckbox);
        
        tr.style.backgroundColor = book.read ? "#DDD" : "#FFF";
        tr.append(tdTitle, tdAuthor, tdRead);
        this.DOMelements.tbody.appendChild(tr); 
 };
};

const test = new Library(3, ["Name of the Wind", "Harry Potter"])
console.log(test);
// PROJECT Section
console.log("PROJECT:\n==========\n");
