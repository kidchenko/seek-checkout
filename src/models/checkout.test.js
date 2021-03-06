import Checkout from "./checkout";
import { classic, standout, premium } from "./product";
import {
  QuantityDealRule,
  PriceDiscountRule,
  PriceDiscountByQuantityRule,
  NewRule,
  OtherRule
} from "./price-rule";

it("can create Checkout", () => {
  const co = new Checkout();
  expect(co.total()).toBe(0);
});

describe("Customer: default", () => {
  it("should pay for classic, standout and premium", () => {
    const co = new Checkout();
    co.add(classic);
    co.add(standout);
    co.add(premium);
    expect(co.total()).toBe(987.97);
  });

  it("should pay for 2x classic, 2x standout and 2x premium without discount", () => {
    const co = new Checkout();
    co.add(classic);
    co.add(classic);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1975.94);
  });
});

describe("Customer: UNILEVER", () => {
  it("should apply 3 for 2 deal on Classic Ads", () => {
    const co = new Checkout([new QuantityDealRule(3, 2, classic.id)]);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(premium);
    expect(co.total()).toBe(934.97);
  });

  it("should apply 6 for 4 deal on Classic Ads", () => {
    const co = new Checkout([new QuantityDealRule(3, 2, classic.id)]);
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

  it("should apply 5 for 4 deal on Classic Ads", () => {
    const co = new Checkout([new QuantityDealRule(5, 4, classic.id)]);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    expect(co.total()).toBe(1079.96);
  });

  it("should pay for 2x classic, 2x standout and 2x premium without discount", () => {
    const co = new Checkout([new QuantityDealRule(3, 2, classic.id)]);
    co.add(classic);
    co.add(classic);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1975.94);
  });
});

describe("Customer: APPLE", () => {
  it("should get a discount on Standout Ads where the price drops to $299.99 per ad", () => {
    const co = new Checkout([new PriceDiscountRule(299.99, standout.id)]);
    co.add(standout);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    expect(co.total()).toBe(1294.96);
  });

  it("should pay for 2x classic and 2x premium without discount", () => {
    const co = new Checkout([new PriceDiscountRule(299.99, standout.id)]);
    co.add(classic);
    co.add(classic);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1329.96);
  });
});

describe("Customer: NIKE", () => {
  it("should get a discount on Premium Ads where 4 or more are purchased", () => {
    const co = new Checkout([
      new PriceDiscountByQuantityRule(379.99, 4, premium.id)
    ]);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1519.96);
  });

  it("should pay normally for less than 4 Premium Ads", () => {
    const co = new Checkout([
      new PriceDiscountByQuantityRule(379.99, 4, premium.id)
    ]);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1184.97);
  });

  it("should accpet 2 rules of the same type", () => {
    const co = new Checkout([
      new PriceDiscountByQuantityRule(379.99, 4, premium.id),
      new PriceDiscountByQuantityRule(200, 2, classic.id)
    ]);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    co.add(classic);
    co.add(classic);
    expect(co.total()).toBe(1919.96);
  });
});

describe("Customer: FORD", () => {
  it("should apply a 5 for 4 deal on Classic Ads", () => {
    const co = new Checkout([new QuantityDealRule(5, 4, classic.id)]);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    expect(co.total()).toBe(1079.96);
  });

  it("should get a discount on Standout Ads where the price drops to $309.99 per ad", () => {
    const co = new Checkout([new PriceDiscountRule(309.99, standout.id)]);
    co.add(standout);
    co.add(standout);
    expect(co.total()).toBe(619.98);
  });

  it("should get a discount discount on Premium Ads when 3 or more are purchased pay $389.99 per ad", () => {
    const co = new Checkout([
      new PriceDiscountByQuantityRule(389.99, 3, premium.id)
    ]);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(1169.97);
  });

  it("should pay normally for less than 3 premium ads", () => {
    const co = new Checkout([
      new PriceDiscountByQuantityRule(389.99, 3, premium.id)
    ]);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(789.98);
  });

  it("should get a discount when have multiple price rules", () => {
    const co = new Checkout([
      new QuantityDealRule(5, 4, classic.id),
      new PriceDiscountRule(309.99, standout.id),
      new PriceDiscountByQuantityRule(389.99, 3, premium.id)
    ]);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(2869.91);
  });
});

describe("New Client: using NewRule", () => {
  it("should pay 1 by item", () => {
    const co = new Checkout([new NewRule()]);
    co.add(classic);
    co.add(standout);
    co.add(premium);
    expect(co.total()).toBe(3);
  });

  it("should pay for 2x classic, 2x standout and 2x premium without discount", () => {
    const co = new Checkout([new NewRule()]);
    co.add(classic);
    co.add(classic);
    co.add(standout);
    co.add(standout);
    co.add(premium);
    co.add(premium);
    expect(co.total()).toBe(6);
  });
});

describe("Other New Client: using OtherRule", () => {
  it("should pay 1 by item", () => {
    const co = new Checkout([new NewRule(), new OtherRule(3, 2, classic.id)]);
    co.add(classic);
    co.add(classic);
    co.add(classic);
    co.add(premium);
    expect(co.total()).toBe(540.98);
  });
});
