const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("somar 5 + 'chimpazé' deve retornar 'Erro'", () => {
  const resultado = calculadora.somar(5, "chimpazé");
  expect(resultado).toBe("Erro");
});

test("8 / 4 retorna 2", () => {
  const resultado = calculadora.dividir(8, 4);
  expect(resultado).toBe(2);
});

test("0 / 200 retorna 0", () => {
  const resultado = calculadora.dividir(0, 200);
  expect(resultado).toBe(0);
});

test("200 / 0 retorna 'Erro de divisão por zero'", () => {
  const resultado = calculadora.dividir(200, 0);
  expect(resultado).toBe("Não é possível dividir por zero");
});
