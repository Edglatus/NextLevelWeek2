import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createClassesTable1596681045847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'classes',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: 'subject',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'cost',
                    type: 'real',
                    isNullable: false,
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false,
                }
            ]
        }));

        await queryRunner.createForeignKey('classes', new TableForeignKey({
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
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes');
    }

}
