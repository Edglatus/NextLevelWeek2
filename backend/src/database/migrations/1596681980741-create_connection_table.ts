import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createConnectionTable1596681980741 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'connections',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                }
            ]
        }));

        await queryRunner.createForeignKey('connections',
            new TableForeignKey({
                name: 'user_fk',
                referencedTableName: 'users',
                columnNames: [
                    'user_id',
                ],
                referencedColumnNames: [
                    'id',
                ],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('connections');
    }

}
