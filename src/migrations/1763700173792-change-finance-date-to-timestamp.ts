import { MigrationInterface, QueryRunner } from "typeorm";

export class changeFinanceDateToTimestamp1763700173792 implements MigrationInterface {
    name = 'changeFinanceDateToTimestamp1763700173792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "finance" ALTER COLUMN "date" TYPE TIMESTAMP WITH TIME ZONE USING "date"::timestamp with time zone`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "finance" ALTER COLUMN "date" TYPE date USING "date"::date`);
    }

}
