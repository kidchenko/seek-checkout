import { DefaultPriceRule } from './PriceRuleModel';

class Checkout {

  pricingRules = [];
  rule;
  itens = []

  constructor(pricingRules) {
    this.pricingRules = pricingRules;
  }

  add(item) {
    this.itens.push(item);
  }

  total() {
    let total = this.pricingRules.reduce((before, current) => {
      return before + current.calculate(this.itens);
    }, 0);
    return total;
  }
}

export default Checkout;
