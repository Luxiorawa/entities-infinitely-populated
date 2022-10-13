import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Client } from './entities/client.entity';

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
  ],
  controllers: [AppController],
})
export class AppModule {}
