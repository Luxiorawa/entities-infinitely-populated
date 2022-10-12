import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

import { Foo } from './foo.entity';

@Entity()
export class FooConfig {
  @PrimaryKey()
  public id: number;

  @Property()
  public key: string;

  @Property()
  public value: string;

  @ManyToOne(() => Foo)
  public foo: Foo();
}
