import { Module } from '@nestjs/common';
import { VegetarianRestaurant } from 'src/restaurant/vegetarianRestaurant';

import { RestaurantFactory } from '../restaurant/restaurantFactory';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  providers: [
    OrderService,
    { provide: RestaurantFactory, useClass: VegetarianRestaurant },
  ],

  controllers: [OrderController],
})
export class OrderModule {}
