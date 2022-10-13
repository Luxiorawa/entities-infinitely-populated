import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

import { Client } from './client.entity';

@Entity()
export class ClientConfig {
  @PrimaryKey()
  public id: number;

  @Property()
  public key: string;

  @Property()
  public value: string;

  @ManyToOne(() => Client)
  public client: Client;
}
