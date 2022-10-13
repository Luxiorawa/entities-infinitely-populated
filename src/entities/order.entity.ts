import { Client } from './client.entity';
import {
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Address } from './address.entity';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryKey()
  public id: number;

  @Property()
  public reference: string;

  @ManyToOne(() => User)
  public user: User;

  @Property({ type: "json" })
  public product: Product;

  @Property({ type: "json" })
  public address: Address;

  @ManyToOne(() => Client)
  public client: Client;
}
