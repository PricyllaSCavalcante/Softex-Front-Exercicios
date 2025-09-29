class ContaBancaria {
  #saldo = 0; // atributo privado

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }

  verSaldo() {
    return `Saldo atual: R$${this.#saldo}`;
  }
}

// Teste
const conta = new ContaBancaria();
conta.depositar(100);
conta.sacar(30);

console.log(conta.verSaldo()); // Saldo atual: R$70
