import { MigrationInterface, QueryRunner } from "typeorm";

export class vehicleTable1677118460501 implements MigrationInterface {
    name = 'vehicleTable1677118460501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL, "title" character varying NOT NULL, "year" character varying NOT NULL, "mileage" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, "urlImage" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicle"`);
    }

}
