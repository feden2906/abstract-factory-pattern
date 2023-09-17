import { Dish } from '../../abstract-products/dish.interface';

export class MeatDish implements Dish {
  name: string;
  price: number;
  mainIngredient: string;

  constructor(name: string, price: number, mainIngredient: string) {
    this.name = name;
    this.price = price;
    this.mainIngredient = mainIngredient;
  }

  getInfo(): string {
    return `Meat dish with ${this.mainIngredient}, price: ${this.price}`;
  }
}
