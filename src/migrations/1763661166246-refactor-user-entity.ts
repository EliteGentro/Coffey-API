import { MigrationInterface, QueryRunner } from "typeorm";

export class refactorUserEntity1763661166246 implements MigrationInterface {
    name = 'refactorUserEntity1763661166246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_98a443532f01fec5fc1ecf140e4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "given_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "family_name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "organizationOrganizationid"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying`);
        await queryRunner.query(`UPDATE "user" SET "name" = 'Unknown' WHERE "name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cooperativa_id" integer`);
        await queryRunner.query(`UPDATE "user" SET "cooperativa_id" = 1 WHERE "cooperativa_id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cooperativa_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "contenidos_terminados" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_a232777de3aac2f63c8fe4ce8ea" FOREIGN KEY ("cooperativa_id") REFERENCES "cooperativa"("cooperativa_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_a232777de3aac2f63c8fe4ce8ea"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "contenidos_terminados"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cooperativa_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('base', 'coordinator', 'admin')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'base'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "organizationOrganizationid" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD "family_name" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "given_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_98a443532f01fec5fc1ecf140e4" FOREIGN KEY ("organizationOrganizationid") REFERENCES "organization"("organizationid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
