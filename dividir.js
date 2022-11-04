const dividir = function(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return "No se puede dividir por cero";
  }
  return `La división de ${num1} y ${num2} es = ${num1 / num2}`;
}

module.exports = dividir;

