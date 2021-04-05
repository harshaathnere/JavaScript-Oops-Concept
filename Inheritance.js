function Book (title ,author ,year){
    this.title = title
    this.author = author;
    this.year = year;
    
     console.log("Book Intialized");
 }

 Book.prototype.getSummary = function(){
    return ` This book  ${this.title} was return by ${this.author} and published in ${this.year}`
 }
 // inherit the prototype
 Magazine.prototype = Object.create(Book.prototype)
 // Magazine Constructor
 function Magazine(title,author,year, month){
   Book.call(this,title,author,year);  
   this.month = month;
 }
  Magazine.prototype.constructor = Magazine

 //intiatante the magazine
 const mag1 = new Magazine('Mag one','vhgta','2022','Jan')
 console.log(mag1.getSummary())
 console.log(mag1)
