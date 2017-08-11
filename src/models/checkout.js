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
    let itensToCalculate = _.cloneDeep(this.itens);
    this.calculator = new DefaultCalculator(itensToCalculate);
    let dealRule = _.find(this.rules, { id : QUANTITY_DEAL_ID });
    let priceRule = _.find(this.rules, { id : DISCOUNT_ID });
    let priceRuleWhen = _.find(this.rules, { id : DISCOUNT_MORE_THAN_ID });
    if (dealRule) {
      this.calculator = new QuantityDealCalculator(this.calculator, itensToCalculate, dealRule);
    }
    if (priceRule) {
      this.calculator = new PriceDiscountCalculator(this.calculator, itensToCalculate, priceRule);
    }
    if (priceRuleWhen) {
      this.calculator = new PriceDiscountByQuantityCalculator(this.calculator, itensToCalculate, priceRuleWhen);
    }
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
