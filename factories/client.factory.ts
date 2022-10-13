import { Factory, Faker } from '@mikro-orm/seeder';
import { Client } from '../src/entities/client.entity';

export class ClientFactory extends Factory<Client> {
  public model = Client;

  public definition(faker: Faker): Partial<Client> {
    return {
      name: faker.animal.cat(),
    };
  }
}
