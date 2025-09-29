class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  area() {
    return this.largura * this.altura;
  }

  perimetro() {
    return 2 * (this.largura + this.altura);
  }
}

// Testando com um retângulo 5x3
const r1 = new Retangulo(5, 3);

console.log("Área:", r1.area());
console.log("Perímetro:", r1.perimetro());