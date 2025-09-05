// Função para calcular a média de um vetor de notas
function mediaAluno(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

document.addEventListener("DOMContentLoaded", () => {
  // Três alunos
  let aluno1 = [7, 8, 6];
  let aluno2 = [9, 5, 7];
  let aluno3 = [10, 9, 8];

  // Calcular médias
  let m1 = mediaAluno(aluno1);
  let m2 = mediaAluno(aluno2);
  let m3 = mediaAluno(aluno3);

  // Mostrar na tela
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    Aluno 1: notas ${aluno1.join(", ")} → média = ${m1.toFixed(2)}<br>
    Aluno 2: notas ${aluno2.join(", ")} → média = ${m2.toFixed(2)}<br>
    Aluno 3: notas ${aluno3.join(", ")} → média = ${m3.toFixed(2)}
  `;
});
