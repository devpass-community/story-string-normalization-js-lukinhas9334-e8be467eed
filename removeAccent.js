function removeAccent(str) {
    // Add your solution here!
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

var minhaStr = 'Olá, mundo!';
var strSAcentos = removeAccent(minhaStr);
console.log(strSAcentos);

module.exports = removeAccent;
