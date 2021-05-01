import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService{
 
  private usersRepository:Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository( UsersRepository );
  }

  async create( email: string ){
    
    //verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({
      email
    });


    //se existir, mostrar usuário
    if ( userExists ){
      return userExists;
    }
    
    //se não existir, gravar usuário
    const user = this.usersRepository.create({
      email
    })
    
    //salva no banco de dados
    await this.usersRepository.save( user );
    return user;
    
  }

  async findByEmail(email: string){

    const user = await this.usersRepository.findOne({
      email,
    })
    return user;
  }

}


export { UsersService };