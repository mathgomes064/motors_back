import { MigrationInterface, QueryRunner } from "typeorm";

export class booleanChange1677517690238 implements MigrationInterface {
    name = 'booleanChange1677517690238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "complement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "complement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" boolean NOT NULL`);
    }

}
