import _ from "lodash";
import { DefaultCalculator } from "./calculator";

export default class Checkout {
  constructor(rules = []) {
    this.rules = rules;
    this.itens = [];
  }

  createCalculator() {
    const itensToCalculate = _.cloneDeep(this.itens);
    this.calculator = new DefaultCalculator(itensToCalculate);

    this.rules.forEach(rule => {
      this.calculator = rule.getCalculator(this.calculator, itensToCalculate);
    });
  }

  add(item) {
    this.itens.push(item);
    return this;
  }

  getItens() {
    return this.itens;
  }

  total() {
    this.createCalculator();
    return this.calculator.calculate();
  }
}
