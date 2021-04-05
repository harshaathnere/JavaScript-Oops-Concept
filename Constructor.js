function Book (title ,author ,year){
   this.title = title
   this.author = author;
   this.year = year;
   this.getSummary = function(){
    return ` This book was return by ${this.author} and published in ${this.year}`
   }
    console.log("Book Intialized");
}
const Book1 = new Book("Book one","Prettrir", "2013");
const Book2 = new Book("Book two","jestrea", "2021");
console.log(Book2.getSummary())
