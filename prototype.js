function Book (title ,author ,year){
    this.title = title
    this.author = author;
    this.year = year;
    
     console.log("Book Intialized");
 }

 Book.prototype.getSummary = function(){
    return ` This book was return by ${this.author} and published in ${this.year}`
 }
 // get Age
 Book.prototype.getAge = function(){
     const years = new Date().getFullYear() - this.year;
     return ` this book is ${this.title} is  ${years} old`
 }
 //get Revise
 Book.prototype.getRevise = function(newYear){
  this.year = newYear;
  this.revised = year;
 }
 // instatiate the object
 const Book1 = new Book("Book one","Prettrir", "2013");
 const Book2 = new Book("Book two","jestrea", "2021");
 console.log(Book1)
 Book1.revised = "2022"
 console.log(Book1)
