import Checkout from './Checkout'
import { classic, standout, premium } from './AdsModel';

it('can create Checkout', () => {
  let co = new Checkout({});
  expect(co.total()).toBe(0);
});

describe('Customer: default', () => {

  it('should pay for classic, standout and premium', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(standout);
    co.add(premium);
    expect(co.total()).toBe(987.97);
  });

  it('should pay for 2x classic, 2x standout and 2x premium without discount', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(classic);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1975.94);
  });
});

describe('Customer: UNILEVER', () => {

  it('should apply 3 for 2 deal on Classic Ads', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(premium);
    expect(co.total()).toBe(934.97);
  });

  it('should apply 6 for 4 deal on Classic Ads', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(premium);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(premium);
    expect(co.total()).toBe(1869.94);
  });

  it('should pay for 2x classic, 2x standout and 2x premium without discount', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(classic);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1975.94);
  });
});

describe('Customer: APPLE', () => {

  it('should get a discount on Standout Ads where the price drops to $299.99 per ad', () => {
    let co = new Checkout({});
    co.add(standout);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    expect(co.total()).toBe(1294.96);
  });

  it('should pay for 2x classic and 2x premium without discount', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(classic);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1329.96);
  });
});

describe('Customer: NIKE', () => {

  it('should get a discount on Premium Ads where 4 or more are purchased', () => {
    let co = new Checkout({});
    co.add(premium);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1519.96);
  });

  it('should pay normaly for less than 4 Premium Ads', () => {
    let co = new Checkout({});
    co.add(premium);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1184.97);
  });

});

describe('Customer: FORD', () => {

  it('Gets a 5 for 4 deal on Classic Ads', () => {
    let co = new Checkout({});
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    expect(co.total()).toBe(1079.96);
  });

  it('Gets a discount on Standout Ads where the price drops to $309.99 per ad', () => {
    let co = new Checkout({});
    expect(co.total()).toBe(1079.96);
  });

  it('Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad', () => {
    let co = new Checkout({});
    expect(co.total()).toBe(1079.96);
  });

});



