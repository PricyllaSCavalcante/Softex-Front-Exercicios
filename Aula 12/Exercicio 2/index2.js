class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  detalhes() {
    return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  }
}

// Criando 2 carros
const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2022);

console.log(carro1.detalhes());
console.log(carro2.detalhes());
