import { Dish } from './abstract-products/dish.interface';
import { Drink } from './abstract-products/drink.interface';
import { Ingredient } from './abstract-products/ingredient.interface';
import { MeatDish } from './concrete-products/meat-restaurant/meatDish';
import { MeatIngredient } from './concrete-products/meat-restaurant/meatIngredient';
import { Soda } from './concrete-products/meat-restaurant/soda';
import { RestaurantFactory } from './restaurantFactory';

export class MeatRestaurant extends RestaurantFactory {
  createDish(): Dish {
    return new MeatDish('Meat Dish', 15, 'beef');
  }

  createDrink(): Drink {
    return new Soda('Soda', 2, 'lemon');
  }

  createIngredient(): Ingredient {
    return new MeatIngredient('Beef', 8);
  }
}
