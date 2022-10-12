import { Factory, Faker } from '@mikro-orm/seeder';
import { Foo } from './../src/entities/foo.entity';

export class FooFactory extends Factory<Foo> {
  public model = Foo;

  public definition(faker: Faker): Partial<Foo> {
    return {
      name: faker.animal.cat(),
    };
  }
}
