class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  descricao() {
    return `Funcionário ${this.nome}, salário: R$${this.salario}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario); // chama o construtor da classe pai
    this.departamento = departamento;
  }

  descricao() {
    return `Gerente ${this.nome}, salário: R$${this.salario}, depto: ${this.departamento}`;
  }
}

// Teste
const f1 = new Funcionario("João", 2000);
const g1 = new Gerente("Maria", 5000, "TI");

console.log(f1.descricao()); // Funcionário João, salário: R$2000
console.log(g1.descricao()); // Gerente Maria, salário: R$5000, depto: TI
