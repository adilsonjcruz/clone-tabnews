function somar(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    return "Erro";
  }

  return numero1 + numero2;
}

exports.somar = somar;

function dividir(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    return "Erro";
  }

  if (numero1 === 0) {
    return 0;
  }

  if (numero2 === 0) {
    return "Não é possível dividir por zero";
  }

  return numero1 / numero2;
}

exports.dividir = dividir;
