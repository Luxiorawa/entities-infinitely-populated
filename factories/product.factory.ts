import { Factory, Faker } from '@mikro-orm/seeder';
import { Product } from './../src/entities/product.entity';

export class ProductFactory extends Factory<Product> {
  public model = Product;

  public definition(faker: Faker): Partial<Product> {
    return {
      title: faker.company.name(),
      description: faker.company.name()
    };
  }
}
