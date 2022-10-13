import { Client } from './client.entity';
import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { User } from './user.entity';

@Entity()
export class Address {
  @PrimaryKey()
  public id: number;

  @Property()
  public label: string;

  @Property()
  public street: string;

  @ManyToOne(() => User)
  public user: User;

  @ManyToOne(() => Client)
  public client: Client;
}
