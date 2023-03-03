import { MigrationInterface, QueryRunner } from "typeorm";

export class addConfirmPassword1677783888164 implements MigrationInterface {
    name = 'addConfirmPassword1677783888164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "confirmPassword" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "confirmPassword"`);
    }

}
