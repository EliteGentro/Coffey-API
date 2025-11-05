import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeContentPrimaryColumnGenerationStrategy1762368101480 implements MigrationInterface {
    name = 'ChangeContentPrimaryColumnGenerationStrategy1762368101480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "PK_20817ae3445d00a5bc50a58a144"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "content_id"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "content_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "PK_20817ae3445d00a5bc50a58a144" PRIMARY KEY ("content_id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "PK_20817ae3445d00a5bc50a58a144"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "content_id"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "content_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "PK_20817ae3445d00a5bc50a58a144" PRIMARY KEY ("content_id")`);
    }

}
