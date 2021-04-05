class Book{
    constructor(title, author,year){
       this.title = title;
       this.author = author;
       this.year = year
    }
    getSummary(){
        return ` This book  ${this.title} was return by ${this.author} and published in ${this.year}`
    }
}
// Magazine subclass
 class Maggazine extends Book  {
  constructor(title,author,year,month){
    super(title,author,year)
    this.month = month
  }
 }

 // Instantiate  Magazine
 const mag1 = new Maggazine('my book','hhhhhh','2022','sep')
 console.log(mag1)
 console.log(mag1.getSummary())