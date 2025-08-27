document.addEventListener("DOMContentLoaded", () => {
  // Matriz: [nome, preço, quantidade]
  let produtos = [
    ["Notebook", 3500, 5],
    ["Mouse", 80, 20],
    ["Teclado", 150, 10]
  ];

  const tabela = document.querySelector("#tabelaProdutos tbody");
  const estoqueTotalEl = document.getElementById("estoqueTotal");

  let estoqueTotal = 0;

  for (let i = 0; i < produtos.length; i++) {
    let linha = document.createElement("tr");

    // Produto
    let celNome = document.createElement("td");
    celNome.textContent = produtos[i][0];
    linha.appendChild(celNome);

    // Preço
    let celPreco = document.createElement("td");
    celPreco.textContent = produtos[i][1].toFixed(2);
    linha.appendChild(celPreco);

    // Quantidade
    let celQtd = document.createElement("td");
    celQtd.textContent = produtos[i][2];
    linha.appendChild(celQtd);

    // Total por produto
    let totalProduto = produtos[i][1] * produtos[i][2];
    let celTotal = document.createElement("td");
    celTotal.textContent = totalProduto.toFixed(2);
    linha.appendChild(celTotal);

    tabela.appendChild(linha);

    estoqueTotal += totalProduto;
  }

  estoqueTotalEl.textContent = estoqueTotal.toFixed(2);
});
