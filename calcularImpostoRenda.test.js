const calcularImpostoRenda = require('./calcularImpostoRenda.js');

describe('Testes para cálculo de imposto de renda', () => {
  test('Deve retornar 0 para salário de até R$22.000', () => {
    expect(calcularImpostoRenda(22000)).toBe(0);
  });

  test('Deve calcular 7.5% de imposto para salário acima de R$22.000 até R$50.000', () => {
    expect(calcularImpostoRenda(30000)).toBe(600); // (30000-22000) * 0.075 = 600
  });

  test('Deve calcular o imposto corretamente para salário acima de R$50.000', () => {
    // (70000-50000) * 0.15 + (50000-22000) * 0.075 = 3000 + 2100 = 5100
    expect(calcularImpostoRenda(70000)).toBe(5100);
  });
});
