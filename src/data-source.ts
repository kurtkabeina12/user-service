/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';

export const AppDataSource = new DataSource({
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
});