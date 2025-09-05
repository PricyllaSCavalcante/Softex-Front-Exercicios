// Função que retorna o dobro de um número
function dobro(x) {
  return x * 2;
}

// Função chamada ao clicar no botão
function calcularDobro() {
  const valor = document.getElementById("numero").value;
  const numero = Number(valor);

  if (isNaN(numero)) {
    document.getElementById("resultado").textContent = "Digite um número válido!";
    return;
  }

  const resultado = dobro(numero);
  document.getElementById("resultado").textContent = `O dobro de ${numero} é ${resultado}.`;
}
