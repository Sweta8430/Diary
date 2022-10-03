const SecretDiary = require("./SecretDiary");
const Entries = require("./Entries");

console.log("HIIII");

const myEntries = new SecretDiary(false);
const entries = new Entries("abc");
const entries1 = new Entries("123");
const entries2 = new Entries("Sweta");
myEntries.getAddEntry(entries);
myEntries.getAddEntry(entries1);
console.log(myEntries.getEntries());
const myEntries1 = new SecretDiary(true);
console.log(myEntries1.getAddEntry(entries2));
console.log(myEntries1.getEntries());
