import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid"; 

//nome da tabela
@Entity("settings")
class Setting{
  
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    //se não estiver preenchido, quer dizer que é novo
    if ( !this.id ){
      this.id = uuid();
    }
  }

}

export { Setting };