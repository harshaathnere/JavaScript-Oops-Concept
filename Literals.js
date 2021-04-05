// const s = "Hello"
// console.log(typeof s);
// console.log(s.toUpperCase());

// const s1 = new String("Hello");
// console.log(typeof s1);
console.log(window);
window.alert();
console.log(window.navigator.appVersion);
// Object Literals

const book1 = {
    title: "my book",
    author: "Prettier",
    Price: "200",
    year: 2019,
   getSummary: function(){
       return ` This book was return by ${this.author} and published in ${this.year}`
   }

}
const book2 = {
    title: "book two",
    author: "Prettier",
    Price: "200",
    year: 2021,
   getSummary: function(){
       return ` This book was return by ${this.author} and published in ${this.year}`
   }

}
console.log(Object.values(book2));
console.log(Object.keys(book2))