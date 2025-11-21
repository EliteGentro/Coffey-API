import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteSoftDeletedFinances1763661500000 implements MigrationInterface {
    name = 'DeleteSoftDeletedFinances1763661500000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "finance" WHERE "deletedAt" IS NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // This migration is irreversible - soft-deleted records are permanently removed
    }

}
