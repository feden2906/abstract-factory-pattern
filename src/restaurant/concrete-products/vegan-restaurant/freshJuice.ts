import { Drink } from '../../abstract-products/drink.interface';

export class FreshJuice implements Drink {
  name: string;
  price: number;
  fruit: string;

  constructor(name: string, price: number, fruit: string) {
    this.name = name;
    this.price = price;
    this.fruit = fruit;
  }

  getInfo(): string {
    return `Fresh juice with ${this.fruit}, price: ${this.price}`;
  }
}
