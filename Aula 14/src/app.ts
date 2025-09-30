class Tarefa {
  constructor(public descricao: string, public concluida: boolean = false) {}
  marcarConcluida() { this.concluida = true; }
}

const lista: Tarefa[] = [];
const input = document.getElementById("tarefa") as HTMLInputElement;
const btn = document.getElementById("add") as HTMLButtonElement;
const ul = document.getElementById("lista") as HTMLUListElement;

function render() {
  ul.innerHTML = "";
  lista.forEach((tarefa, i) => {
    const li = document.createElement("li");
    li.textContent = tarefa.descricao;
    if (tarefa.concluida) li.classList.add("done");

    const botao = document.createElement("button");
    botao.textContent = "Concluir";
    botao.onclick = () => { lista[i].marcarConcluida(); render(); };

    li.appendChild(botao);
    ul.appendChild(li);
  });
}

btn.onclick = () => {
  const texto = input.value.trim();
  if (!texto) return;
  lista.push(new Tarefa(texto));
  input.value = "";
  render();
};
