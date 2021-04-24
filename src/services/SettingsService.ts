import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate{
  chat: boolean,
  username: string
}

class SettingsService{
  
  async create( {chat, username}:ISettingsCreate ){
    const settingsRepository = getCustomRepository(SettingsRepository);

    //seleciona apenas um registro da tabela
    const userAlreadyExists = await settingsRepository.findOne({
      username
    });

    //se usuário já existir, mostra mensagem de erro
    if (userAlreadyExists){
      throw new Error("User already exists!");
    }

    //objeto recebendo o dados para criar o usuário
    const settings = settingsRepository.create({
      chat,
      username
    });
  
    //salvando o usuário
    await settingsRepository.save(settings);

    return settings;

  }

}

export { SettingsService };