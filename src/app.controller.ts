import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Foo } from './entities/foo.entity';

@Controller('foo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':foo_id')
  async getFooAndFooConfigById(@Param('foo_id') fooId: number): Promise<Foo> {
    return this.appService.getFooAndFooConfigById(fooId);
  }
}
