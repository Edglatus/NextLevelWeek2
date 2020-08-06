import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createClassScheduleTable1596681606720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'class_schedule',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: 'week_day',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'from',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'to',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'class_id',
                    type: 'integer',
                    isNullable: false,
                }
            ]
        }));

        await queryRunner.createForeignKey('class_schedule',
            new TableForeignKey({
                name: 'class_fk',
                referencedTableName: 'classes',
                columnNames: [
                    'class_id',
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
        await queryRunner.dropTable('class_schedule');
    }

}

