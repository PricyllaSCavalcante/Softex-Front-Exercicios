"use strict";
class Tarefa {
    constructor(descricao, concluida = false) {
        this.descricao = descricao;
        this.concluida = concluida;
    }
    marcarConcluida() { this.concluida = true; }
}
const lista = [];
const input = document.getElementById("tarefa");
const btn = document.getElementById("add");
const ul = document.getElementById("lista");
function render() {
    ul.innerHTML = "";
    lista.forEach((tarefa, i) => {
        const li = document.createElement("li");
        li.textContent = tarefa.descricao;
        if (tarefa.concluida)
            li.classList.add("done");
        const botao = document.createElement("button");
        botao.textContent = "Concluir";
        botao.onclick = () => { lista[i].marcarConcluida(); render(); };
        li.appendChild(botao);
        ul.appendChild(li);
    });
}
btn.onclick = () => {
    const texto = input.value.trim();
    if (!texto)
        return;
    lista.push(new Tarefa(texto));
    input.value = "";
    render();
};
