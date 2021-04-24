import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619233135866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"messages",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"admin_id",
                        type:"uuid",
                    },
                    {
                        name:"user_id",
                        type:"uuid",
                    },
                    {
                        name:"text",
                        type:"varchar",                        
                    },
                    {
                        name:"createad_at",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
