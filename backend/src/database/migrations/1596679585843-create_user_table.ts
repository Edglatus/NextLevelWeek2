import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserTable1596679585843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable( new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    generationStrategy: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'avatar_url',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'bio',
                    type: 'varchar',
                    isNullable: false,
                }
            ]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
