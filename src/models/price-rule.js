import { CLASSIC_ID, STANDOUT_ID, PREMIUM_ID } from './product';

const QUANTITY_DEAL_ID = 'deal';
const DISCOUNT_ID = 'discount';
const DISCOUNT_MORE_THAN_ID = 'discount_more_than';

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
}

class PriceDiscountRule {

  constructor(newPrice, adsType) {
    this.id = DISCOUNT_ID,
    this.newPrice = newPrice;
    this.adsType = adsType;
  }
}

class PriceDiscountByQuantityRule {

  constructor(newPrice, minimumQuantity, adsType) {
    this.id = DISCOUNT_MORE_THAN_ID;
    this.newPrice = newPrice;
    this.adsType = adsType;
    this.minimumQuantity = minimumQuantity;
  }
}


export {
  QuantityDealRule,
  PriceDiscountRule,
  PriceDiscountByQuantityRule,
  QUANTITY_DEAL_ID,
  DISCOUNT_ID,
  DISCOUNT_MORE_THAN_ID
};
