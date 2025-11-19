import { MigrationInterface, QueryRunner } from "typeorm";

export class createCooperativaTable1763513794478 implements MigrationInterface {
    name = 'createCooperativaTable1763513794478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cooperativa" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "cooperativa_id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8ee0f5ee1a1da290ec96215fe08" PRIMARY KEY ("cooperativa_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cooperativa"`);
    }

}
