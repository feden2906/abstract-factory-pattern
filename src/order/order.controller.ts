import { Controller, Get } from '@nestjs/common';

import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/order')
  getOrder(): string {
    return this.orderService.getOrder();
  }
}
