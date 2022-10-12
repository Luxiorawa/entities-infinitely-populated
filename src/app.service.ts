import { Injectable } from "@nestjs/common";
import { EntityRepository } from "@mikro-orm/mysql";
import { Foo } from "./entities/foo.entity";
import { InjectRepository } from "@mikro-orm/nestjs";

@Injectable()
export class AppService {
  public constructor(
    @InjectRepository(Foo)
    private readonly fooRepository: EntityRepository<Foo>
  ) {}

  async getFooAndFooConfigById(fooId: number): Promise<Foo> {
    const foo = await this.fooRepository.findOne(
      {
        id: fooId,
      },
      {
        populate: ["configs"],
      }
    );

    // Successfully compile

    console.log("foo :", foo);
    console.log("foo config :", foo.configs);
    console.log("foo in config :", foo.configs[0].foo);

    // Doesn't compile : Property 'configs' does not exists on type 'typeof Foo'

    console.log("foo config in config :", foo.configs[0].foo.configs);

    return foo;
  }
}
