// Classe base
class Animal {
  falar(): string {
    return "O animal faz um som.";
  }
}

// Subclasse Cachorro
class Cachorro extends Animal {
  falar(): string {
    return "Au au!";
  }
}

// Subclasse Gato
class Gato extends Animal {
  falar(): string {
    return "Miau!";
  }
}

// Array de animais
const animais: Animal[] = [new Cachorro(), new Gato(), new Animal()];

// Percorrendo o array
animais.forEach((animal, i) => {
  console.log(`Animal ${i + 1}: ${animal.falar()}`);
});
