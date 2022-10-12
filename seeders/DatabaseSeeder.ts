import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { FooFactory } from './../factories/foo.factory';
import { FooConfigFactory } from './../factories/foo_config.factory';

export class DatabaseSeeder extends Seeder {
  public async run(em: EntityManager): Promise<void> {
    await new FooFactory(em)
      .each((foo) => {
        foo.configs.set(new FooConfigFactory(em).make(3));
      })
      .create(5);
  }
}
