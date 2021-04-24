import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController{
  async create(request: Request, response: Response){

  //desestruturando o body
  const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  //objeto recebendo o dados para criar o usuário
  const settings = settingsRepository.create({
    chat,
    username
  });

  //salvando o usuário
  await settingsRepository.save(settings);

  return response.json( settings );
}
}

export { SettingsController };