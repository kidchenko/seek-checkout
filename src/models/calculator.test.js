import { DefaultCalculator, QuantityDealCalculator } from "./calculator";
import { QuantityDealRule } from "./price-rule";
import { products, CLASSIC_ID, classic, standout, premium } from "./product";

describe("Default Calculator", () => {
  it("should be zero if empty", () => {
    const calculator = new DefaultCalculator();
    expect(calculator.calculate()).toBe(0);
  });

  it("should sum the products", () => {
    const calculator = new DefaultCalculator(products);
    expect(calculator.calculate()).toBe(987.97);
  });
});

describe("QuantityDealCalculator", () => {
  it("should pay for classic, standout and premium", () => {
    let calculator = new DefaultCalculator(products);
    calculator = new QuantityDealCalculator(
      calculator,
      products,
      new QuantityDealRule(3, 2, CLASSIC_ID)
    );
    expect(calculator.calculate()).toBe(987.97);
  });

  it("should pay for 2x classic, 2x standout and 2x premium without discount", () => {
    const doubleProducts = products.concat(products);
    let calculator = new DefaultCalculator();
    calculator = new QuantityDealCalculator(
      calculator,
      doubleProducts,
      new QuantityDealRule(3, 2, CLASSIC_ID)
    );
    expect(calculator.calculate()).toBe(1975.94);
  });

  it("should apply 3 for 2 deal on Classic Ads", () => {
    const products = [classic, classic, classic, premium];
    let calculator = new DefaultCalculator();
    calculator = new QuantityDealCalculator(
      calculator,
      products,
      new QuantityDealRule(3, 2, classic.id)
    );
    expect(calculator.calculate()).toBe(934.97);
  });
});
