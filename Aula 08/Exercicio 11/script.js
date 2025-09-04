// Estado simples (em 2h30 não complicar)
let alunos = [
  { id: crypto.randomUUID(), nome: 'Ana', turma: '1A', media: 8.2 },
  { id: crypto.randomUUID(), nome: 'Bruno', turma: '2B', media: 6.5 },
];

const $ = (s) => document.querySelector(s);

function erro(msg){ $('#msg').textContent = msg; setTimeout(()=> $('#msg').textContent='', 2000); }
function validar({nome,turma,media}){
  if(!nome || nome.trim().length<3) return 'Nome inválido';
  if(!turma) return 'Turma inválida';
  if(isNaN(media) || media<0 || media>10) return 'Média deve ser 0-10';
  return null;
}

function calcularMediaGeral(lista){
  if(lista.length===0) return 0;
  return (lista.reduce((acc,a)=>acc+a.media,0)/lista.length);
}

function render(){
  const tbody = $('#tbody'); tbody.innerHTML='';
  alunos.forEach(a=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${a.nome}</td>
      <td>${a.turma}</td>
      <td>${a.media.toFixed(1)} 
        <span class="badge ${a.media>=7?'ok':'low'}">${a.media>=7?'Aprov.':'Reprov.'}</span>
      </td>
      <td><button class="action del" data-id="${a.id}">Excluir</button></td>
    `;
    tbody.appendChild(tr);
  });

  $('#total').textContent = alunos.length;
  $('#mediaGeral').textContent = calcularMediaGeral(alunos).toFixed(2);

  // ações de exclusão
  document.querySelectorAll('.del').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      alunos = alunos.filter(x=>x.id!==id);
      render();
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  // submit
  $('#form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
      nome: $('#nome').value.trim(),
      turma: $('#turma').value.trim(),
      media: Number($('#media').value)
    };
    const v = validar(data); if(v){ erro(v); return; }
    alunos.push({ id: crypto.randomUUID(), ...data });
    e.target.reset();
    render();
  });

  render();
});
