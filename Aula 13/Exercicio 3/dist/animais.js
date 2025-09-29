"use strict";
// Classe base
class Animal {
    falar() {
        return "O animal faz um som.";
    }
}
// Subclasse Cachorro
class Cachorro extends Animal {
    falar() {
        return "Au au!";
    }
}
// Subclasse Gato
class Gato extends Animal {
    falar() {
        return "Miau!";
    }
}
// Array de animais
const animais = [new Cachorro(), new Gato(), new Animal()];
// Percorrendo o array
animais.forEach((animal, i) => {
    console.log(`Animal ${i + 1}: ${animal.falar()}`);
});
