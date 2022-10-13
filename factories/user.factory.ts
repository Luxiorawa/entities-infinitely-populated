import { Factory, Faker } from '@mikro-orm/seeder';
import { User } from '../src/entities/user.entity';

export class UserFactory extends Factory<User> {
  public model = User;

  public definition(faker: Faker): Partial<User> {
    return {
      name: faker.animal.cat(),
      first_name: faker.animal.cat()
    };
  }
}
