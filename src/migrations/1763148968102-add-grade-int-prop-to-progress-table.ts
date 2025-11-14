import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGradeIntPropToProgressTable1763148968102 implements MigrationInterface {
    name = 'AddGradeIntPropToProgressTable1763148968102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" ADD "grade" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP COLUMN "grade"`);
    }

}
