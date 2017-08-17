import {
  DefaultCalculator
  , QuantityDealCalculator
  , PriceDiscountCalculator
  , PriceDiscountByQuantityCalculator
  , NewCalculator
} from './calculator';

const QUANTITY_DEAL_ID = 'deal';
const DISCOUNT_ID = 'discount';
const DISCOUNT_MORE_THAN_ID = 'discount_more_than';
const NEW_RULE_NEW_CALCULATOR = 'new_rule_new_calculator';
const OTHER_RULE_OLD_CALCULATOR = 'new_rule_old_calculator';

// const ruleData = {
//   unilever: {
//     applyOn: CLASSIC_ID,
//     match: (a ) => a.id === this.applyOn,
//     ruleField: 'quantity',
//     apply: (quantity, factor) => Math.floor((quantity / factor)),
//   },
//   apple: {
//     applyOn: STANDOUT_ID,
//     match: (a) => a.id === this.applyOn,
//     ruleField: 'price',
//     apply: (a) => a,
//   },
//   nike: {
//     applyOn: PREMIUM_ID,
//     match: (a, quantity, moreThan) => (quantity > moreThan) && a.id === this.applyOn,
//     ruleField: 'price',
//     apply: (a) => a
//   }
// }

class QuantityDealRule {

  constructor(originalQtd, newQtd, adsType) {
    this.id = QUANTITY_DEAL_ID;
    this.originalQtd = originalQtd;
    this.newQtd = newQtd;
    this.adsType = adsType;
  }

  getCalculator(calculator, itens) {
    calculator = calculator || new DefaultCalculator(itens);
    return new QuantityDealCalculator(calculator, itens, this);
  }
}

class PriceDiscountRule {

  constructor(newPrice, adsType) {
    this.id = DISCOUNT_ID;
    this.newPrice = newPrice;
    this.adsType = adsType;
  }

  getCalculator(calculator, itens) {
    calculator = calculator || new DefaultCalculator(itens);
    return new PriceDiscountCalculator(calculator, itens, this);
  }
}

class PriceDiscountByQuantityRule {

  constructor(newPrice, minimumQuantity, adsType) {
    this.id = DISCOUNT_MORE_THAN_ID;
    this.newPrice = newPrice;
    this.adsType = adsType;
    this.minimumQuantity = minimumQuantity;
  }

  getCalculator(calculator, itens) {
    calculator = calculator || new DefaultCalculator(itens);
    return new PriceDiscountByQuantityCalculator(calculator, itens, this);
  }
}

class NewRule {

  id = NEW_RULE_NEW_CALCULATOR;

  getCalculator(calculator, itens) {
    calculator = calculator || new DefaultCalculator(itens);
    return new NewCalculator(calculator, itens);
  }
}

class OtherRule {

  constructor(originalQtd, newQtd, adsType) {
    this.id = OTHER_RULE_OLD_CALCULATOR;
    this.originalQtd = originalQtd;
    this.newQtd = newQtd;
    this.adsType = adsType;
  }

  getCalculator(calculator, itens) {
    calculator = calculator || new DefaultCalculator(itens);
    return new QuantityDealCalculator(calculator, itens, this);
  }
}


export {
  QuantityDealRule,
  PriceDiscountRule,
  PriceDiscountByQuantityRule,
  NewRule,
  OtherRule,
  QUANTITY_DEAL_ID,
  DISCOUNT_ID,
  DISCOUNT_MORE_THAN_ID
};
