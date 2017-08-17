import _ from 'lodash';
import { DefaultCalculator, QuantityDealCalculator, PriceDiscountCalculator, PriceDiscountByQuantityCalculator } from './calculator';
import { QUANTITY_DEAL_ID, DISCOUNT_ID, DISCOUNT_MORE_THAN_ID } from './price-rule';

export default class Checkout {

  itens = []
  calculator;

  constructor(rules = []) {
    this.rules = rules;
  }

  createCalculator() {
    const itensToCalculate = _.cloneDeep(this.itens);
    this.calculator = new DefaultCalculator(itensToCalculate);

    this.rules.forEach((rule) => {
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
