import { MigrationInterface, QueryRunner } from "typeorm";

export class MissingUnderscore1762367616423 implements MigrationInterface {
    name = 'MissingUnderscore1762367616423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "contentid" TO "content_id"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "PK_9d0a5af2783e38bce13098826d3" TO "PK_20817ae3445d00a5bc50a58a144"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "PK_20817ae3445d00a5bc50a58a144" TO "PK_9d0a5af2783e38bce13098826d3"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "content_id" TO "contentid"`);
    }

}