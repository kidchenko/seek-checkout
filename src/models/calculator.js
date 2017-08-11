import _ from 'lodash';

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

  getProductsByType = (product) => product.id === this.productType;

  calculate() {

    const matchProducts = this.itens.filter(this.getProductsByType)

    this.calculator.itens = _.difference(this.itens, matchProducts);

    const freeItens = Math.floor((matchProducts.length / this.originalQtd));

    const billedQtd = matchProducts.length - freeItens;

    const total = billedQtd  * matchProducts[0].price;

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

  getProductsByType = (product) => product.id === this.productType;

  sumProducts = (before, current) => before + this.newPrice;

  calculate() {

    const matchProducts = this.itens.filter(this.getProductsByType);
    this.calculator.itens = _.difference(this.itens, matchProducts);

    const total = matchProducts.reduce(this.sumProducts,0);

    console.log(`PriceDiscountCalculator - total: ${total}, price: ${this.newPrice}`);

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

  getProductsByType = (product) => product.id === this.productType;

  matchRule = (matchProducts) => matchProducts.length >= this.minimumQuantity;

  sumUsingNewPrice = (before, current) => before + this.newPrice;

  sumUsingCurrentPrice = (before, current) => before + current.price;

  calculate() {

    const matchProducts = this.itens.filter(this.getProductsByType);
    this.calculator.itens = _.difference(this.itens, matchProducts);

    let total = 0;

    if (this.matchRule(matchProducts)) {
      total = matchProducts.reduce(this.sumUsingNewPrice, total);
      console.log(`PriceDiscountByQuantityCalculator - total: ${total}, match rule and new price: ${this.newPrice}`);
    } else {
      console.log(`PriceDiscountByQuantityCalculator - total: ${total}, not match rule`);
      total = matchProducts.reduce(this.sumUsingCurrentPrice, total);
    }

    return this.calculator.calculate() + total;
  }
}


export {
  DefaultCalculator,
  QuantityDealCalculator,
  PriceDiscountCalculator,
  PriceDiscountByQuantityCalculator
}
