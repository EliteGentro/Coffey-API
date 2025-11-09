import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserIdToInteger1762532205131 implements MigrationInterface {
    name = 'ChangeUserIdToInteger1762532205131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "finance" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "finance_id" SERIAL NOT NULL, "user_id" integer NOT NULL, "name" character varying NOT NULL, "date" date NOT NULL, "category" character varying NOT NULL, "amount" numeric(10,2) NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_de81a6cd506696c08f6b7f93d98" PRIMARY KEY ("finance_id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userid"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userid" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108" PRIMARY KEY ("userid")`);
        await queryRunner.query(`ALTER TABLE "finance" ADD CONSTRAINT "FK_b04a96f3db0c87d8fc7b3b3a0ce" FOREIGN KEY ("user_id") REFERENCES "user"("userid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "finance" DROP CONSTRAINT "FK_b04a96f3db0c87d8fc7b3b3a0ce"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userid"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108" PRIMARY KEY ("userid")`);
        await queryRunner.query(`DROP TABLE "finance"`);
    }

}
