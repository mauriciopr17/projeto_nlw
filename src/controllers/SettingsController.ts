import { Request, Response } from "express";
import { CircularRelationsError } from "typeorm";
import { SettingsService } from "../services/SettingsService";

class SettingsController{
  async create(request: Request, response: Response){

  //desestruturando o body
  const { chat, username } = request.body;

  const settingsService = new SettingsService();
  
  //deu certo o create do usuário
  try{
    const settings = await settingsService.create({chat, username});

    return response.json( settings );
  }catch(err){
    //caso o usuário já exista
    return response.status(400).json({
      message: err.message,
    })

  }
  }

  async findByUsername( request: Request, response: Response){
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUserName(username);

    return response.json(settings);
  }

  async update( request: Request, response: Response){
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return response.json(settings);
  }
  
}

export { SettingsController };