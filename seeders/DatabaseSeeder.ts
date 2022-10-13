import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { ClientFactory } from '../factories/client.factory';
import { ClientConfigFactory } from '../factories/client_config.factory';

export class DatabaseSeeder extends Seeder {
  public async run(em: EntityManager): Promise<void> {
    const clients = await new ClientFactory(em)
      .each((client) => {
        client.configs.set(new ClientConfigFactory(em).make(3));
      })
      .create(5);
    
    console.log("client :", JSON.stringify(clients))
  }
}
