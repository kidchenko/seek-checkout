import _ from 'lodash';

class DefaultCalculator {

  constructor(itens) {
    this.itens = itens;
  }

  calculate() {
    if (!this.itens || this.itens.length === 0) return 0;
    const total = this.itens.reduce((before, acc) => before + acc.price, 0);
    console.log('DefaultCalculator', total);
    return total;
  }
}

class QuantityDealCalculator {

  constructor(calculator, itens, rule) {
    this.calculator = calculator;
    this.itens = itens;
    this.originalQtd = rule.originalQtd;
    this.newQtd = rule.newQtd;
    this.adsType = rule.adsType;
  }

  calculate() {

    //count itens per type
    let byType = this.itens.filter((e, i) => {
      return e.id === this.adsType;
    });

    this.calculator.itens = _.difference(this.itens, byType);

    //get discount qtd
    let qtd = Math.floor((byType.length / this.originalQtd));

    let total = (byType.length - qtd) * byType[0].price;

    console.log('QuantityDealCalculator', total)

    return this.calculator.calculate() + total;
  }
}

class PriceDiscountCalculator {

  constructor(calculator, itens, rule) {
    this.calculator = calculator;
    this.itens = itens;
    this.newPrice = rule.newPrice;
    this.adsType = rule.adsType;
  }

  calculate() {

    let byType = this.itens.filter((e, i) => e.id === this.adsType);

    this.calculator.itens = _.difference(this.itens, byType);

    let total = byType.reduce((before, current) => {
      return before + this.newPrice;
    }, 0);

    console.log('PriceDiscountByQuantityRule', total)

    return this.calculator.calculate() + total;
  }
}

class PriceDiscountByQuantityCalculator {

  constructor(calculator, itens, rule) {
    this.calculator = calculator;
    this.itens = itens;
    this.newPrice = rule.newPrice;
    this.adsType = rule.adsType;
    this.minimumQuantity = rule.minimumQuantity;
  }

  calculate() {

    let byType = this.itens.filter((e, i) => e.id === this.adsType);
    this.calculator.itens = _.difference(this.itens, byType);

    let total = 0;

    if (byType.length >= this.minimumQuantity) {
      total = byType.reduce((before, current) => {
        return before + this.newPrice;
      }, total);
    } else {
      total = byType.reduce((before, current) => {
      return before + current.price;
      }, total);
    }

    console.log('PriceDiscountByQuantityRule', total)

    return this.calculator.calculate() + total;
  }
}


export {
  DefaultCalculator,
  QuantityDealCalculator,
  PriceDiscountCalculator,
  PriceDiscountByQuantityCalculator
}
