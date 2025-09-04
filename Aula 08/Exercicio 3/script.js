document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnGerar");
  const numerosEl = document.getElementById("numeros");
  const resultadoEl = document.getElementById("resultado");

  btn.addEventListener("click", () => {
    let numeros = [];
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 100) + 1;
      numeros.push(num);
      if (num % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    }

    numerosEl.textContent = "Números: " + numeros.join(", ");
    resultadoEl.textContent = `Pares: ${pares} | Ímpares: ${impares}`;
  });
});

