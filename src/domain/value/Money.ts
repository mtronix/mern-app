import { Currency } from '@/domain/value/Currency';

export class Money {
  private amount: number;
  private currency: Currency;

  public constructor(amount: number, currency: Currency|string) {
    if (!Number.isFinite(amount)) {
      throw new Error('Invalid amount, expected finite number');
    }

    this.amount = amount;
    this.currency = this.parseCurrency(currency)
  }

  public getAmount() {
    return this.amount;
  }

  public getCurrency() {
    return this.currency;
  }

  public serialize() {
    return {
      amount: this.getAmount(),
      currency: this.currency.getCode(),
    };
  }

  private parseCurrency(currency: Currency|string): Currency {
    if (currency instanceof Currency) {
      return currency;
    }

    return new Currency(currency);
  }
}