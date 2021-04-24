import { Request, Response } from "express";
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
}

export { SettingsController };