export class Currency {
  private currencies: any = {
    PLN: {
      name: 'Złoty polski',
    },
    USD: {
      name: 'Dolar amerykański',
    },
    EUR: {
      name: 'Euro',
    },
  };

  private code: string;

  public constructor(code: string) {
    const currencyCode = code.toUpperCase();

    if (!this.currencies.hasOwnProperty(currencyCode)) {
      throw new Error('Invalid currency code');
    }

    this.code = currencyCode;
  }

  public getCode() {
    return this.code;
  }

  public getName() {
    return this.currencies[this.code];
  }
}