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

    return foo;
  }
}
