class Checkout {

  pricingRules = [];
  itens = []

  constructor(pricingRules) {
    this.pricingRules = pricingRules;
  }

  add(item) {
    this.itens.push(item);
  }

  total() {
    var total = this.itens.reduce((before, current) => {
      return before + current.price;
    }, 0)
    return total;
  }
}

export default Checkout;
