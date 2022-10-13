import { Client } from './client.entity';
import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  public id: number;

  @Property()
  public name: string;

  @Property()
  public first_name: string;

  @ManyToOne(() => Client)
  public client: Client;
}
