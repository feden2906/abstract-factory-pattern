import { Drink } from '../../abstract-products/drink.interface';

export class Soda implements Drink {
  name: string;
  price: number;
  flavor: string;

  constructor(name: string, price: number, flavor: string) {
    this.name = name;
    this.price = price;
    this.flavor = flavor;
  }

  getInfo(): string {
    return `Soda with ${this.flavor}, price: ${this.price}`;
  }
}
