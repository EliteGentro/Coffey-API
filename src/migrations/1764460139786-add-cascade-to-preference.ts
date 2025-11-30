import { MigrationInterface, QueryRunner } from "typeorm";

export class addCascadeToPreference1764460139786 implements MigrationInterface {
    name = 'addCascadeToPreference1764460139786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preference" DROP CONSTRAINT "FK_e09c307436899ff3adc63774c4d"`);
        await queryRunner.query(`ALTER TABLE "preference" ADD CONSTRAINT "FK_e09c307436899ff3adc63774c4d" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preference" DROP CONSTRAINT "FK_e09c307436899ff3adc63774c4d"`);
        await queryRunner.query(`ALTER TABLE "preference" ADD CONSTRAINT "FK_e09c307436899ff3adc63774c4d" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
