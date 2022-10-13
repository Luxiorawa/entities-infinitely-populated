import { Factory, Faker } from '@mikro-orm/seeder';
import { Address } from './../src/entities/address.entity';

export class AddressFactory extends Factory<Address> {
  public model = Address;

  public definition(faker: Faker): Partial<Address> {
    return {
      label: faker.address.state(),
      street: faker.address.streetAddress()
    };
  }
}
