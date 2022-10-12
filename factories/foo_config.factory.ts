import { Factory, Faker } from '@mikro-orm/seeder';
import { FooConfig } from './../src/entities/foo_config.entity';

export class FooConfigFactory extends Factory<FooConfig> {
  public model = FooConfig;

  public definition(faker: Faker): Partial<FooConfig> {
    return {
      key: faker.animal.cat(),
      value: faker.finance.amount(0, 10000, 0),
    };
  }
}
