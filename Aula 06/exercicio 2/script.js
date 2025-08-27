document.addEventListener("DOMContentLoaded", () => {
  // Matriz: notas de 4 alunos em 3 provas
  let notasAlunos = [
    [7, 8, 6], // Aluno 1
    [9, 5, 8], // Aluno 2
    [6, 7, 7], // Aluno 3
    [4, 5, 6]  // Aluno 4
  ];

  const tabela = document.querySelector("#tabelaNotas tbody");

  for (let i = 0; i < notasAlunos.length; i++) {
    let linha = document.createElement("tr");

    // Nome do aluno
    let celAluno = document.createElement("td");
    celAluno.textContent = `Aluno ${i + 1}`;
    linha.appendChild(celAluno);

    // Notas e soma
    let soma = 0;
    for (let j = 0; j < notasAlunos[i].length; j++) {
      let celNota = document.createElement("td");
      celNota.textContent = notasAlunos[i][j];
      linha.appendChild(celNota);
      soma += notasAlunos[i][j];
    }

    // Média
    let media = soma / notasAlunos[i].length;
    let celMedia = document.createElement("td");
    celMedia.textContent = media.toFixed(2);
    linha.appendChild(celMedia);

    // Situação
    let celSituacao = document.createElement("td");
    if (media >= 7) {
      celSituacao.textContent = "Aprovado";
      celSituacao.className = "aprovado";
    } else {
      celSituacao.textContent = "Reprovado";
      celSituacao.className = "reprovado";
    }
    linha.appendChild(celSituacao);

    // Adiciona a linha na tabela
    tabela.appendChild(linha);
  }
});
