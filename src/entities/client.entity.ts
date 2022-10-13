import { ClientConfig } from './client_config.entity';
import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity()
export class Client {
  @PrimaryKey()
  public id: number;

  @Property()
  public name: string;

  @OneToMany(() => ClientConfig, (clientConfig) => clientConfig.client, {})
  public configs = new Collection<ClientConfig>(this);
}
