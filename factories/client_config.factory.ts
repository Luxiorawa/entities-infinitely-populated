import { Factory, Faker } from '@mikro-orm/seeder';
import { ClientConfig } from '../src/entities/client_config.entity';

export class ClientConfigFactory extends Factory<ClientConfig> {
  public model = ClientConfig;

  public definition(faker: Faker): Partial<ClientConfig> {
    return {
      key: faker.animal.cat(),
      value: faker.finance.amount(0, 10000, 0),
    };
  }
}
