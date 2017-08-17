import {
  QuantityDealRule
  , PriceDiscountRule
  , PriceDiscountByQuantityRule
  , NewRule
  , OtherRule
} from './price-rule';
import {
  DefaultCalculator
  , QuantityDealCalculator
  , PriceDiscountCalculator
  , PriceDiscountByQuantityCalculator
  , NewCalculator
} from './calculator';
import { CLASSIC_ID } from './product';

describe('QuantityDealRule', () => {

  it('should create a correct type of calculator', () => {
    const rule = new QuantityDealRule(3, 2, CLASSIC_ID);
    const calculator = rule.getCalculator();
    expect(calculator).toBeInstanceOf(QuantityDealCalculator);
  });
});

describe('PriceDiscountRule', () => {

  it('should create a correct type of calculator', () => {
    const rule = new PriceDiscountRule(200, CLASSIC_ID);
    const calculator = rule.getCalculator();
    expect(calculator).toBeInstanceOf(PriceDiscountCalculator);
  });
});

describe('PriceDiscountByQuantityRule', () => {

  it('should create a correct type of calculator', () => {
    const rule = new PriceDiscountByQuantityRule(200, 5, CLASSIC_ID);
    const calculator = rule.getCalculator();
    expect(calculator).toBeInstanceOf(PriceDiscountByQuantityCalculator);
  });
});

describe('NewRule', () => {

  it('should create a correct type of calculator', () => {
    const rule = new NewRule();
    const calculator = rule.getCalculator();
    expect(calculator).toBeInstanceOf(NewCalculator);
  });
});

describe('OtherRule', () => {

  it('should create a correct type of calculator', () => {
    const rule = new OtherRule(3, 2, CLASSIC_ID);
    const calculator = rule.getCalculator();
    expect(calculator).toBeInstanceOf(QuantityDealCalculator);
  });
});
