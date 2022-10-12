import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Foo } from './entities/foo.entity';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        dbName: 'test',
        autoLoadEntities: true,
      }),
    }),
    MikroOrmModule.forFeature([Foo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
