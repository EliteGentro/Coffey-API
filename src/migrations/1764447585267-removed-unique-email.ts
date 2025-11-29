import { MigrationInterface, QueryRunner } from "typeorm";

export class removedUniqueEmail1764447585267 implements MigrationInterface {
    name = 'removedUniqueEmail1764447585267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "UQ_8c943ddc5c2bda3c0d6a64079db"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "UQ_8c943ddc5c2bda3c0d6a64079db" UNIQUE ("correo")`);
    }

}
