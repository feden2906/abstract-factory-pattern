import { Dish } from './abstract-products/dish.interface';
import { Drink } from './abstract-products/drink.interface';
import { Ingredient } from './abstract-products/ingredient.interface';
import { FreshJuice } from './concrete-products/vegan-restaurant/freshJuice';
import { VegetarianDish } from './concrete-products/vegan-restaurant/vegetarianDish';
import { VegetarianIngredient } from './concrete-products/vegan-restaurant/vegetarianIngredient';
import { RestaurantFactory } from './restaurantFactory';

export class VegetarianRestaurant extends RestaurantFactory {
  createDish(): Dish {
    return new VegetarianDish('Vegetarian Dish', 10, 'tofu');
  }

  createDrink(): Drink {
    return new FreshJuice('Fresh Juice', 5, 'orange');
  }

  createIngredient(): Ingredient {
    return new VegetarianIngredient('Tofu', 3);
  }
}
