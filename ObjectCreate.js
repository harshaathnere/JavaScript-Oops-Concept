//Object of Props
 const bookProtos = {
     getSummary: function () {
        return ` This book  ${this.title} was return by ${this.author} and published in ${this.year}`
     },

     getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return ` this book is ${this.title} is  ${years} old`
     }
 }

 // Create Object
//  const book1 = Object.create(bookProtos);
//  book1.title = 'Book new '
//  book1.author = 'newApp'
//  book1.year = '2021'
const book1 = Object.create(bookProtos);
  book1.title = {value: 'Book one'}
  book1.author = {value: 'newapp'}
 book1.year = {value: '2020'}

 console.log(book1)