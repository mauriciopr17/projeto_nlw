import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619140714052 implements MigrationInterface {

    //se eu der um yarn typeorm migration:run
    //ele executa tudo que está no up
    //criando tabelas e etc.
    //yarn typeorm migration:run
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"settings", //nome da tabela
                columns:[
                    {
                        name: "id",
                        type: "uuid",//id universal,
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()" //atualiza automaticamente o campo da tabela
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()" //atualiza automaticamente o campo da tabela
                    }
                        
                ]
            })
        )
    }

    //se eu der um yarn typeorm migrations:
    //yarn typeorm migration:revert
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
