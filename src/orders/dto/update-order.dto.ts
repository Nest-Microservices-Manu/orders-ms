import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
 
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList , {
    message: `Valid status are ${OrderStatusList}`
  })
  status?: OrderStatus;
}
