import { Client } from './client.entity';
import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity()
export class Product {
  @PrimaryKey()
  public id: number;

  @Property()
  public title: string;

  @Property()
  public description: string;

  @ManyToOne(() => Client)
  public client: Client;
}
