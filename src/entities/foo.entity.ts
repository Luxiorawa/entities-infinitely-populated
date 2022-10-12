import { FooConfig } from './foo_config.entity';
import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity()
export class Foo {
  @PrimaryKey()
  public id: number;

  @Property()
  public name: string;

  @OneToMany(() => FooConfig, (fooConfig) => fooConfig.foo, {})
  public configs = new Collection<FooConfig>(this);
}
