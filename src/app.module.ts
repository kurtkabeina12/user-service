/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      database: 'financial-platform',
      password: '122712',
      port: 5000,
      entities: [User],
      migrations: ['src/migration/*.ts'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}