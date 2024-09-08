/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsers1671234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const batchSize = 10000; // Размер пакета
    const totalUsers = 1000000; // Общее количество пользователей

    for (let i = 0; i < totalUsers; i += batchSize) {
      const users = [];
      for (let j = 0; j < batchSize && (i + j) < totalUsers; j++) {
        users.push(`('${`FirstName${i + j}`}', '${`LastName${i + j}`}', ${Math.floor(Math.random() * 100)}, '${Math.random() > 0.5 ? 'male' : 'female'}', ${Math.random() > 0.5})`);
      }
      await queryRunner.query(
        `INSERT INTO users (firstName, lastName, age, gender, hasProblems) VALUES ${users.join(', ')}`
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM users`);
  }
}