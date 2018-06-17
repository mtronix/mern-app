import { Money } from '@/domain/value/Money';

export class Product {
  private id: number;
  private name: string;
  private price: Money;

  public constructor(id: number, name: string, price: Money) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public static builder() {
    return new ProductBuilder();
  }
}

class ProductBuilder {
  private id: number;
  private name: string;
  private price: Money;

  withId(id: number) {
    this.id = id;
    return this;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  withPrice(price: Money) {
    this.price = price;
    return this;
  }

  build() {
    return new Product(
      this.id,
      this.name,
      this.price,
    );
  }
}