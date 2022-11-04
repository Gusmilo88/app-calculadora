const multiplicar = function(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return "Multiplicar un número por cero, siempre da 0"
    }
    return `La multiplicación de ${num1} y ${num2} es = ${num1 * num2}`;
}

module.exports = multiplicar;
