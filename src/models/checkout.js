export default class Checkout {

  itens = []
  calculator;

  constructor(rules = []) {
    this.rules = rules;
    this.createCalculator();
  }

  createCalculator() {
    this.calculator = new DefaultCalculator(this.itens);
  }

  add(item) {
    this.itens.push(item);
    return this;
  }

  getItens() {
    return this.itens;
  }

  total() {
    return this.calculator.calculate();
  }
}

class DefaultCalculator {

  constructor(itens) {
    this.itens = itens;
  }

  calculate() {
    return this.itens.reduce((before, acc) => before + acc.price, 0);
  }
}
