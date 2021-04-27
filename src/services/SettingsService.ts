import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate{
  chat: boolean,
  username: string
}

class SettingsService{
  
  private settingsRepository: Repository<Setting>;

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create( {chat, username}:ISettingsCreate ){
    

    //seleciona apenas um registro da tabela
    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    });

    //se usuário já existir, mostra mensagem de erro
    if (userAlreadyExists){
      throw new Error("User already exists!");
    }

    //objeto recebendo o dados para criar o usuário
    const settings = this.settingsRepository.create({
      chat,
      username
    });
  
    //salvando o usuário
    await this.settingsRepository.save(settings);

    return settings;

  }

}

export { SettingsService };