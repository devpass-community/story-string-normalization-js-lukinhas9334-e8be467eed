const removeAccent = require('./removeAccent');

const helloWorld = "Olá, mundo!";
const helloWorldWithoutAccent = removeAccent(helloWorld);
console.log(helloWorldWithoutAccent);