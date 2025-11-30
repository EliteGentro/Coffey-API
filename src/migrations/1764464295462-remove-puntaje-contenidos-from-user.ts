import { MigrationInterface, QueryRunner } from "typeorm";

export class removePuntajeContenidosFromUser1764464295462 implements MigrationInterface {
    name = 'removePuntajeContenidosFromUser1764464295462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "puntaje_aprendizaje"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "contenidos_terminados"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "contenidos_terminados" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "puntaje_aprendizaje" integer NOT NULL DEFAULT '0'`);
    }

}
