class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Criar 2 objetos e imprimir
const pessoa1 = new Pessoa("Ana", 20);
const pessoa2 = new Pessoa("Carlos", 25);

console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar());
