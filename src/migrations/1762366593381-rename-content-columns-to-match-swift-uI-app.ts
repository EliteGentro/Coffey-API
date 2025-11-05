import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameContentColumnsToMatchSwiftUIApp1762366593381 implements MigrationInterface {
    name = 'RenameContentColumnsToMatchSwiftUIApp1762366593381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key constraint temporarily
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_dfda472c0af7812401e592b6a61"`);

        // ORGANIZATION: Rename id to organizationid
        await queryRunner.query(`ALTER TABLE "organization" RENAME COLUMN "id" TO "organizationid"`);
        await queryRunner.query(`ALTER TABLE "organization" RENAME CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" TO "PK_5ffd916973973fe610cb5bbcf7c"`);

        // USER: Rename id to userid
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "id" TO "userid"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108" PRIMARY KEY ("userid")`);

        // USER: Add role enum and column
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('base', 'coordinator', 'admin')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL DEFAULT 'base'`);

        // USER: Rename organizationId to organizationOrganizationid
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "organizationId" TO "organizationOrganizationid"`);

        // CONTENT: Rename id to contentid
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "content_pkey"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "id" TO "contentid"`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "PK_9d0a5af2783e38bce13098826d3" PRIMARY KEY ("contentid")`);

        // CONTENT: Rename description to details
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "description" TO "details"`);

        // CONTENT: Rename transcription to transcript
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "transcription" TO "transcript"`);

        // CONTENT: Rename type to resourceType (requires recreating enum)
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "type" TO "resourceType"`);
        await queryRunner.query(`ALTER TYPE "public"."content_type_enum" RENAME TO "content_resourcetype_enum"`);

        // Recreate foreign key constraint with new column names
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_98a443532f01fec5fc1ecf140e4" FOREIGN KEY ("organizationOrganizationid") REFERENCES "organization"("organizationid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key constraint
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_98a443532f01fec5fc1ecf140e4"`);

        // CONTENT: Revert resourceType to type
        await queryRunner.query(`ALTER TYPE "public"."content_resourcetype_enum" RENAME TO "content_type_enum"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "resourceType" TO "type"`);

        // CONTENT: Revert transcript to transcription
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "transcript" TO "transcription"`);

        // CONTENT: Revert details to description
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "details" TO "description"`);

        // CONTENT: Revert contentid to id
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "PK_9d0a5af2783e38bce13098826d3"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "contentid" TO "id"`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "content_pkey" PRIMARY KEY ("id")`);

        // USER: Revert organizationOrganizationid to organizationId
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "organizationOrganizationid" TO "organizationId"`);

        // USER: Remove role column and enum
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);

        // USER: Revert userid to id
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "userid" TO "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);

        // ORGANIZATION: Revert organizationid to id
        await queryRunner.query(`ALTER TABLE "organization" RENAME CONSTRAINT "PK_5ffd916973973fe610cb5bbcf7c" TO "PK_472c1f99a32def1b0abb219cd67"`);
        await queryRunner.query(`ALTER TABLE "organization" RENAME COLUMN "organizationid" TO "id"`);

        // Recreate foreign key with old column names
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_dfda472c0af7812401e592b6a61" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
