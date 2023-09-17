import { Dish } from './abstract-products/dish.interface';
import { Drink } from './abstract-products/drink.interface';
import { Ingredient } from './abstract-products/ingredient.interface';

export abstract class RestaurantFactory {
  abstract createDish(): Dish;
  abstract createDrink(): Drink;
  abstract createIngredient(): Ingredient;
}
