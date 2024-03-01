// Calculadora.test.js
const Calculadora = require('./Calculadora');

describe('Testes da Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  test('deve adicionar dois números corretamente', () => {
    expect(calculadora.adicionar(1, 2)).toBe(4);
  });

  test('deve subtrair dois números corretamente', () => {
    expect(calculadora.subtrair(5, 2)).toBe(3);
  });
});
