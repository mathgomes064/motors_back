import { MigrationInterface, QueryRunner } from "typeorm";

export class addOwnerInVehicle1678149318258 implements MigrationInterface {
    name = 'addOwnerInVehicle1678149318258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "owner" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "owner"`);
    }

}
