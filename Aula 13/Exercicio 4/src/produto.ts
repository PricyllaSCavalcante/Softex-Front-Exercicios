class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  desconto(porcentagem: number): number {
    return this.preco - (this.preco * porcentagem) / 100;
  }
}

// Teste com produto de R$200 e desconto de 10%
const produto1 = new Produto("Notebook", 200);
console.log(`Preço original: R$${produto1.preco}`);
console.log(`Preço com desconto: R$${produto1.desconto(10)}`);
