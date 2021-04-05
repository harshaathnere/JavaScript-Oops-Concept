class Book{
    constructor(title, author,year){
       this.title = title;
       this.author = author;
       this.year = year
    }
    getSummary(){
        return ` This book  ${this.title} was return by ${this.author} and published in ${this.year}`
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return ` this book is ${this.title} is  ${years} old`
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore (){
        return 'Novels'
    }
}
// instantiate Object
const Book1 = new Book('BOOK1', 'Harsha','2021')
Book1.revise('2028')
console.log(Book1)
console.log(Book.topBookStore())