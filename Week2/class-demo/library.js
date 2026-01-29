class Book{
    title;
    author;
    pages;
    isavailable;
};
//borrow() - Marks the book as not available
//returnBook() - Marks the book as available
//getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//isLongBook() - Returns true if pages > 300, false otherwise
borrow()
{
    this.isavailable=false;
}
returnBook()
{
    this.isavailable=true;
}
getInfo()
{
    return `${this.title} by ${this.author} (${this.pages} pages)`;
}
isLongBook()
{
    return this.pages>300;

}
/* Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
displayInfo()
{
    console.log(this.getInfo());
}

countLongBooks(books)
{
    let count=0;    
    for(let book of books){
        if(book.isLongBook()){
            count++;
        }
    }
    return count;
}
listAvailableBooks(books)
{
    let availableBooks=[];  
    for(let book of books){
        if(book.isavailable){
            availableBooks.push(book);
        }
    }
    return availableBooks;
}   
//creating blocks
let b1 = new Book("Harry Potter", "J.K. Rowling", 500);
let b2 = new Book("Learn JS", "XYZ", 300);
let b3 = new Book("Learn Python", "ABC", 400);
let b4 = new Book("Learn Java", "DEF", 350);
let b5 = new Book("Learn C++", "PQR", 450);

let books=[b1,b2,b3,b4,b5];
//display info
for(let book of books){
    book.displayInfo();
}   
//borrow 2 books

b1.borrow();
b3.borrow();
console.log(b1.title,b1.isavailable);
console.log(b3.title,b3.isavailable);
//return 1 book
b1.returnBook();
console.log(b1.title,b1.isavailable);
//count long books
let longBookCount=b1.countLongBooks(books);
console.log("Number of long books:",longBookCount);     
//list available books
console.log("available books:",Book.listAvailableBooks(books).map(book=>book.title ));




