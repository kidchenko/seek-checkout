import { QuantityDealRule, PriceDiscountRule, PriceDiscountByQuantityRule } from './price-rule'
import { CLASSIC_ID, STANDOUT_ID, PREMIUM_ID } from './product';

const customers = [
  {
    name: 'UNILEVER',
    rules: [new QuantityDealRule(3, 2, CLASSIC_ID)] //Gets a for 3 for 2 deal on Classic Ads
  },
  {
    name: 'APPLE',
    rules: [new PriceDiscountRule(299.99, STANDOUT_ID)] //Gets a discount on Standout Ads where the price drops to $299.99 per ad
  },
  {
    name: 'NIKE',
    rules: [new PriceDiscountByQuantityRule(379.99, 4, PREMIUM_ID)] //Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad
  },
  {
    name: 'FORD',
    rules: [
      new QuantityDealRule(5, 4, CLASSIC_ID),
      new PriceDiscountRule(309.99, STANDOUT_ID),
      new PriceDiscountByQuantityRule(389.99, PREMIUM_ID)
    ]
    //Gets a 5 for 4 deal on Classic Ads
    //Gets a discount on Standout Ads where the price drops to $309.99 per ad
    //Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad
  },
  {
    name: 'MICROSOFT',
    rules: []
  },
  {
    name: 'TESLA',
    rules: []
  },
  {
    name: 'SPACEX',
    rules: []
  },
];

export {
  customers
}
