import { Options } from '@mikro-orm/core';

const DATABASE_CONFIG_FOR_CLI: Options = {
  type: 'mysql',
  entities: ['./dist/**/entities/*.entity.js'],
  entitiesTs: ['./src/**/entities/*.entity.ts'],
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  dbName: 'test',
};

export default DATABASE_CONFIG_FOR_CLI;
