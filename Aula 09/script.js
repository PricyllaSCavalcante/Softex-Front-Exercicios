function calcMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function statusPorMedia(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAluno");
  const saida = document.getElementById("saida");
  let alunos = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const n1 = Number(document.getElementById("nota1").value);
    const n2 = Number(document.getElementById("nota2").value);
    const n3 = Number(document.getElementById("nota3").value);

    const notas = [n1, n2, n3];
    const media = calcMedia(notas);
    const situacao = statusPorMedia(media);

    alunos.push({ nome, notas, media, situacao });

    // Renderizar tabela
    let html = "<table>";
    html += "<tr><th>Aluno</th><th>Notas</th><th>Média</th><th>Situação</th></tr>";

    for (let i = 0; i < alunos.length; i++) {
      html += `<tr>
        <td>${alunos[i].nome}</td>
        <td>${alunos[i].notas.join(", ")}</td>
        <td>${alunos[i].media.toFixed(2)}</td>
        <td>${alunos[i].situacao}</td>
      </tr>`;
    }

    html += "</table>";
    saida.innerHTML = html;

    form.reset();
  });
});

