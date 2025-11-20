import { MigrationInterface, QueryRunner } from "typeorm";

export class renameUseridToUserId1763660638912 implements MigrationInterface {
    name = 'renameUseridToUserId1763660638912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "userid" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108" TO "PK_758b8ce7c18b9d347461b30228d"`);
        await queryRunner.query(`ALTER SEQUENCE "user_userid_seq" RENAME TO "user_user_id_seq"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER SEQUENCE "user_user_id_seq" RENAME TO "user_userid_seq"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" TO "PK_755ac9fbd440bc9b97fe9532108"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "user_id" TO "userid"`);
    }

}
