const randomNumber = () => Math.floor(Math.random() * 100);

const toUpper = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatStr = (str1, str2) => str1.concat(str2); 

module.exports = { randomNumber, toUpper, firstLetter, concatStr };