document.addEventListener("DOMContentLoaded", () => {
  const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
  const lista = document.getElementById("listaNomes");

  for (let nome of nomes) {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  }
});
