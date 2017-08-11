import { DefaultCalculator, QuantityDealCalculator }  from './calculator';
import { QuantityDealRule } from './price-rule';
import { products, CLASSIC_ID, classic, standout, premium } from './product';

describe('Default Calculator', () => {

  it('should be zero if empty', () => {
    const calculator = new DefaultCalculator();
    expect(calculator.calculate()).toBe(0);
  });

  it('should sum the products', () => {
    const calculator = new DefaultCalculator(products);
    expect(calculator.calculate()).toBe(987.97);
  });
});

describe('QuantityDealCalculator', () => {

  it('should pay for classic, standout and premium', () => {
    let calculator = new DefaultCalculator(products);
    calculator = new QuantityDealCalculator(calculator,
      products,
      new QuantityDealRule(3, 2, CLASSIC_ID)
    )
    expect(calculator.calculate()).toBe(987.97);
  });

  it('should pay for 2x classic, 2x standout and 2x premium without discount', () => {
    const doubleProducts = products.concat(products);
    let calculator = new DefaultCalculator();
    calculator = new QuantityDealCalculator(
      calculator,
      doubleProducts,
      new QuantityDealRule(3, 2, CLASSIC_ID)
    );
    expect(calculator.calculate()).toBe(1975.94);
  });

  it('should apply 3 for 2 deal on Classic Ads', () => {
    const products = [classic, classic, classic, premium];
    let calculator = new DefaultCalculator();
    calculator = new QuantityDealCalculator(calculator,
      products,
      new QuantityDealRule(3, 2, classic.id));
    expect(calculator.calculate()).toBe(934.97);
  });
});

// describe('Customer: UNILEVER', () => {

//

//   it('should apply 6 for 4 deal on Classic Ads', () => {
//     let co = new Checkout([new QuantityDealRule(3, 2, classic.id)]);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(premium);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(premium);
//     expect(co.total()).toBe(1869.94);
//   });

//   it('should pay for 2x classic, 2x standout and 2x premium without discount', () => {
//     let co = new Checkout([new QuantityDealRule(3, 2, classic.id)]);
//     co.add(classic);
//     co.add(classic);
//     co.add(standout);
//     co.add(standout);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(1975.94);
//   });
// });

// describe('Customer: APPLE', () => {

//   it('should get a discount on Standout Ads where the price drops to $299.99 per ad', () => {
//     let co = new Checkout([new PriceDiscountRule(299.99, standout.id)]);
//     co.add(standout);
//     co.add(standout);
//     co.add(standout);
//     co.add(premium);
//     expect(co.total()).toBe(1294.96);
//   });

//   it('should pay for 2x classic and 2x premium without discount', () => {
//     let co = new Checkout([new PriceDiscountRule(299.99, standout.id)]);
//     co.add(classic);
//     co.add(classic);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(1329.96);
//   });
// });

// describe('Customer: NIKE', () => {

//   it('should get a discount on Premium Ads where 4 or more are purchased', () => {
//     let co = new Checkout([new PriceDiscountByQuantityRule(379.99, premium.id, 4)]);
//     co.add(premium);
//     co.add(premium);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(1519.96);
//   });

//   it('should pay normally for less than 4 Premium Ads', () => {
//     let co = new Checkout([new PriceDiscountByQuantityRule(379.99, premium.id, 4)]);
//     co.add(premium);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(1184.97);
//   });

// });

// describe('Customer: FORD', () => {

//   it('should apply a 5 for 4 deal on Classic Ads', () => {
//     let co = new Checkout([new QuantityDealRule(5, 4, classic.id)]);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     expect(co.total()).toBe(1079.96);
//   });

//   it('should get a discount on Standout Ads where the price drops to $309.99 per ad', () => {
//     let co = new Checkout([new PriceDiscountRule(309.99, standout.id)]);
//     co.add(standout);
//     co.add(standout);
//     expect(co.total()).toBe(619.98);
//   });

//   it('should get a discount discount on Premium Ads when 3 or more are purchased pay $389.99 per ad', () => {
//     let co = new Checkout([new PriceDiscountByQuantityRule(389.99, premium.id, 3)]);
//     co.add(premium);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(1169.97);
//   });

//   it('should pay normally for less than 3 premium ads', () => {
//     let co = new Checkout([new PriceDiscountByQuantityRule(389.99, premium.id, 3)]);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(789.98);
//   });

//   it('should get a discount when have multiple price rules', () => {
//     let co = new Checkout([
//       new QuantityDealRule(5, 4, classic.id),
//       new PriceDiscountRule(309.99, standout.id),
//       new PriceDiscountByQuantityRule(389.99, premium.id, 3)
//     ]);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(classic);
//     co.add(standout);
//     co.add(standout);
//     co.add(premium);
//     co.add(premium);
//     co.add(premium);
//     expect(co.total()).toBe(2869.91);
//   })
// });


