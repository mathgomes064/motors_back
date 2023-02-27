import { MigrationInterface, QueryRunner } from "typeorm";

export class userAndAddressTable1677505220162 implements MigrationInterface {
    name = 'userAndAddressTable1677505220162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL, "cep" character varying NOT NULL, "state" boolean NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cellPhone" character varying NOT NULL, "birthDate" character varying NOT NULL, "description" character varying NOT NULL, "isAdvertiser" boolean NOT NULL, "password" character varying NOT NULL, "addressId" uuid, CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
