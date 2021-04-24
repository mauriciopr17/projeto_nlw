import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService{
  async create( email: string ){
    
    const usersRepository = getCustomRepository( UsersRepository );
    
    //verificar se o usuário existe
    const userExists = await usersRepository.findOne({
      email
    });


    //se existir, mostrar usuário
    if ( userExists ){
      return userExists;
    }
    
    //se não existir, gravar usuário
    const user = usersRepository.create({
      email
    })
    
    //salva no banco de dados
    await usersRepository.save( user );
    return user;

  }
}

export { UserService };