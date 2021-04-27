import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessagesCreate{
  admin_id?: string,// o ? indica que o campo pode ser opcional
  text: string,
  user_id: string
}

class MessagesService{

  private messageRepository: Repository<Message>;

  constructor(){
    this.messageRepository = getCustomRepository(MessagesRepository);
  }

  async create( { admin_id, text, user_id }: IMessagesCreate ){

    const message = this.messageRepository.create({
      admin_id,
      text,
      user_id
    });

    await this.messageRepository.save( message );
    return message;

  }

//trazendo uma lista do usuário
async listByUser(user_id: string){

  const list = await this.messageRepository.find({
    where: { user_id },
    // nome da coluna existente em /services/MessagesService
    //nesse caso ele já mostra as informações da entidade user
    relations: ["user"]
  })

  return list;
}

}

export { MessagesService };