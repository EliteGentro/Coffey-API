import { MigrationInterface, QueryRunner } from "typeorm";

export class createAdminTable1763514215628 implements MigrationInterface {
    name = 'createAdminTable1763514215628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "admin_id" SERIAL NOT NULL, "name" character varying NOT NULL, "correo" character varying NOT NULL, "cooperativa_id" integer NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_08603203f2c50664bda27b1ff89" PRIMARY KEY ("admin_id"))`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_7b7d9bd31154c573175b5dbff5f" FOREIGN KEY ("cooperativa_id") REFERENCES "cooperativa"("cooperativa_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_7b7d9bd31154c573175b5dbff5f"`);
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}
