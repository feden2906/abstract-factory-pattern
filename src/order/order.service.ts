import { Injectable } from '@nestjs/common';

import { RestaurantFactory } from '../restaurant/restaurantFactory';

@Injectable()
export class OrderService {
  constructor(private readonly restaurantFactory: RestaurantFactory) {}

  getOrder(): string {
    const dish = this.restaurantFactory.createDish();
    const drink = this.restaurantFactory.createDrink();
    const ingredient = this.restaurantFactory.createIngredient();

    return `Order: ${dish.name} with ${ingredient.name}, ${
      drink.name
    }. Total price: ${dish.price + drink.price + ingredient.price}`;
  }
}
