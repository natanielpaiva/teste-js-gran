//me siga @natanieltech
function calcularImpostoRenda(salarioAnual) {
  if (salarioAnual <= 22000) {
    return 0;
  } else if (salarioAnual <= 50000) {
    return (salarioAnual - 22000) * 0.075;
  } else {
    return ((salarioAnual - 50000) * 0.15) + ((50000 - 22000) * 0.075);
  }
}

module.exports = calcularImpostoRenda;

  