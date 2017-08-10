export default class Checkout {

  itens = []

  add(item) {
    this.itens.push(item);
    return this;
  }

  getItens() {
    return this.itens;
  }

  total() {
    return this.itens.reduce((before, acc) => before + acc.price, 0);
  }
}
