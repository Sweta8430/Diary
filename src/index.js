const SecretDiary = require("./SecretDiary");
const Entries = require("./Entries");

console.log("HIIII");
const myEntries = new Entries("abc");
const myEntries1 = new Entries("123");
console.log(myEntries.getAddEntry());
console.log(myEntries.getEntries());
console.log(myEntries1.getAddEntry());
console.log(myEntries1.getEntries());
