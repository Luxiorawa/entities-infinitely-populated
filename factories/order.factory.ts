import { Factory, Faker } from '@mikro-orm/seeder';
import { Order } from './../src/entities/order.entity';

export class OrderFactory extends Factory<Order> {
  public model = Order;

  public definition(faker: Faker): Partial<Order> {
    return {
      reference: faker.finance.amount(0, 1000000, 0)
    };
  }
}
