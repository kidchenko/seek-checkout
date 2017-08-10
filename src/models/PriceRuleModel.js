class DefaultPriceRule {

  calculate(itens) {
    let total = itens.reduce((before, current) => {
      return before + current.price;
    }, 0);
    return total;
  }
}

class QuantityDealRule {

  originalQtd;
  newQtd;
  adsType;

  constructor(originalQtd, newQtd, adsType) {
    this.originalQtd = originalQtd;
    this.newQtd = newQtd;
    this.adsType = adsType;
  }

  calculate(itens) {

    //count itens per type
    let byType = itens.filter((e, i) => {
      return e.id === this.adsType;
    });

    //count itens without discount
    let notType = itens.filter((e, i) => {
      return e.id != this.adsType;
    });

    // sum not discount itens
    let subTotal = notType.reduce((before, current) => {
      return before + current.price;
    }, 0);

    //get discount qtd
    let qtd = Math.floor((byType.length / this.originalQtd));


    let totalType = (byType.length - qtd) * byType[0].price;

    return subTotal + totalType;
  }
}

class PriceDiscountRule {

  newPrice;
  adsType;

  constructor(newPrice, adsType) {
    this.newPrice = newPrice;
    this.adsType = adsType;
  }

  calculate(itens) {

    let byType = itens.filter((e, i) => {
      return e.id === this.adsType;
    });

    let notType = itens.filter((e, i) => {
      return e.id !== this.adsType;
    });

    let subTotal = notType.reduce((before, current) => {
      return before + current.price;
    }, 0);

    let total = byType.reduce((before, current) => {
      return before + this.newPrice;
    }, subTotal);

    return total;
  }
}

class PriceDiscountByQuantityRule {

  newPrice;
  adsType;
  minimumQuantity;

  constructor(newPrice, adsType, minimumQuantity) {
    this.newPrice = newPrice;
    this.adsType = adsType;
    this.minimumQuantity = minimumQuantity;
  }

  calculate(itens) {

    let byType = itens.filter((e, i) => {
      return e.id === this.adsType;
    });

    let notType = itens.filter((e, i) => {
      return e.id !== this.adsType;
    });

    let subTotal = notType.reduce((before, current) => {
      return before + current.price;
    }, 0);

    // if premium ads quantity > minimum use discountPrice
    if (byType.length >= this.minimumQuantity) {
      return byType.reduce((before, current) => {
        return before + this.newPrice;
      }, subTotal);
    }
    return byType.reduce((before, current) => {
      return before + current.price;
    }, subTotal);
  }
}


export { DefaultPriceRule, QuantityDealRule, PriceDiscountRule, PriceDiscountByQuantityRule };
