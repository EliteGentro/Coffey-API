import { MigrationInterface, QueryRunner } from "typeorm";

export class addTimestampsToPreferenceProgress1763564768104 implements MigrationInterface {
    name = 'addTimestampsToPreferenceProgress1763564768104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preference" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "preference" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "preference" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "progress" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "progress" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "progress" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "preference" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "preference" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "preference" DROP COLUMN "createdAt"`);
    }

}
