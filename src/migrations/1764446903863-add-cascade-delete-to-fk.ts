import { MigrationInterface, QueryRunner } from "typeorm";

export class addCascadeDeleteToFk1764446903863 implements MigrationInterface {
    name = 'addCascadeDeleteToFk1764446903863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_7b7d9bd31154c573175b5dbff5f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_a232777de3aac2f63c8fe4ce8ea"`);
        await queryRunner.query(`ALTER TABLE "finance" DROP CONSTRAINT "FK_b04a96f3db0c87d8fc7b3b3a0ce"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_ddcaca3a9db9d77105d51c02c24"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_5cf98e56d4fbf9b73c72e201733"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "UQ_8c943ddc5c2bda3c0d6a64079db" UNIQUE ("correo")`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_7b7d9bd31154c573175b5dbff5f" FOREIGN KEY ("cooperativa_id") REFERENCES "cooperativa"("cooperativa_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_a232777de3aac2f63c8fe4ce8ea" FOREIGN KEY ("cooperativa_id") REFERENCES "cooperativa"("cooperativa_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "finance" ADD CONSTRAINT "FK_b04a96f3db0c87d8fc7b3b3a0ce" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_ddcaca3a9db9d77105d51c02c24" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_5cf98e56d4fbf9b73c72e201733" FOREIGN KEY ("content_id") REFERENCES "content"("content_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_5cf98e56d4fbf9b73c72e201733"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_ddcaca3a9db9d77105d51c02c24"`);
        await queryRunner.query(`ALTER TABLE "finance" DROP CONSTRAINT "FK_b04a96f3db0c87d8fc7b3b3a0ce"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_a232777de3aac2f63c8fe4ce8ea"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_7b7d9bd31154c573175b5dbff5f"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "UQ_8c943ddc5c2bda3c0d6a64079db"`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_5cf98e56d4fbf9b73c72e201733" FOREIGN KEY ("content_id") REFERENCES "content"("content_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_ddcaca3a9db9d77105d51c02c24" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "finance" ADD CONSTRAINT "FK_b04a96f3db0c87d8fc7b3b3a0ce" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_a232777de3aac2f63c8fe4ce8ea" FOREIGN KEY ("cooperativa_id") REFERENCES "cooperativa"("cooperativa_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_7b7d9bd31154c573175b5dbff5f" FOREIGN KEY ("cooperativa_id") REFERENCES "cooperativa"("cooperativa_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
