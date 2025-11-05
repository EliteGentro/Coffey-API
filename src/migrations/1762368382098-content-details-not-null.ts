import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentDetailsNotNull1762368382098 implements MigrationInterface {
    name = 'ContentDetailsNotNull1762368382098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "details" SET DEFAULT 'nulo'`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "details" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "details" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "details" DROP NOT NULL`);
    }

}
