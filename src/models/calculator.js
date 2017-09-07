import _ from "lodash";

class DefaultCalculator {
  constructor(itens) {
    this.itens = itens;
  }

  calculate() {
    if (!this.itens || this.itens.length === 0) return 0;
    const total = this.itens.reduce((before, acc) => before + acc.price, 0);
    return total;
  }
}

class QuantityDealCalculator {
  constructor(calculator, itens, rule) {
    this.calculator = calculator;
    this.itens = itens;
    this.originalQtd = rule.originalQtd;
    this.newQtd = rule.newQtd;
    this.productType = rule.adsType;
  }

  getProductsByType(product) {
    return product.id === this.productType;
  }

  calculate() {
    const matchProducts = this.itens.filter(p => this.getProductsByType(p));
    this.calculator.itens = _.difference(this.itens, matchProducts);

    if (matchProducts.length === 0) return this.calculator.calculate() + 0;

    const freeItens = Math.floor(matchProducts.length / this.originalQtd);

    const billedQtd = matchProducts.length - freeItens;

    const total = billedQtd * matchProducts[0].price;

    console.log(`QuantityDealCalculator - total: ${total}, free: ${freeItens}`);

    return this.calculator.calculate() + total;
  }
}

class PriceDiscountCalculator {
  constructor(calculator, itens, rule) {
    this.calculator = calculator;
    this.itens = itens;
    this.newPrice = rule.newPrice;
    this.productType = rule.adsType;
  }

  getProductsByType(product) {
    return product.id === this.productType;
  }

  sumProducts(before, current) {
    return before + this.newPrice;
  }

  calculate() {
    const matchProducts = this.itens.filter(p => this.getProductsByType(p));
    this.calculator.itens = _.difference(this.itens, matchProducts);

    const total = matchProducts.reduce(
      (before, current) => this.sumProducts(before, current),
      0
    );

    console.log(
      `PriceDiscountCalculator - total: ${total}, price: ${this.newPrice}`
    );

    return this.calculator.calculate() + total;
  }
}

class PriceDiscountByQuantityCalculator {
  constructor(calculator, itens, rule) {
    this.calculator = calculator;
    this.itens = itens;
    this.newPrice = rule.newPrice;
    this.productType = rule.adsType;
    this.minimumQuantity = rule.minimumQuantity;
  }

  getItensByType(product) {
    return product.id === this.productType;
  }

  matchRule(matchProducts) {
    return matchProducts.length >= this.minimumQuantity;
  }

  sumUsingNewPrice(before, current) {
    return before + this.newPrice;
  }

  sumUsingCurrentPrice(before, current) {
    return before + current.price;
  }

  calculate() {
    const matchProducts = this.itens.filter(p => this.getItensByType(p));
    this.calculator.itens = _.difference(this.itens, matchProducts);

    let total = 0;

    if (this.matchRule(matchProducts)) {
      total = matchProducts.reduce(
        (before, current) => this.sumUsingNewPrice(before, current),
        total
      );
      console.log(
        `PriceDiscountByQuantityCalculator - total: ${total}, match rule and new price: ${this
          .newPrice}`
      );
    } else {
      console.log(
        `PriceDiscountByQuantityCalculator - total: ${total}, not match rule`
      );
      total = matchProducts.reduce(this.sumUsingCurrentPrice, total);
    }

    return this.calculator.calculate() + total;
  }
}

class NewCalculator {
  constructor(calculator, itens) {
    this.calculator = calculator;
    this.itens = itens;
  }

  calculate() {
    return this.itens.length;
  }
}

export {
  DefaultCalculator,
  QuantityDealCalculator,
  PriceDiscountCalculator,
  PriceDiscountByQuantityCalculator,
  NewCalculator
};
