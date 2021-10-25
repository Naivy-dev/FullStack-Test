import { Request, Response } from "express";
import { GetUserService } from "../services/GetUserService"
class GetUserController{
    async handle( request:Request, response:Response){
        const {nome, cep, rendaMensal, numDependentes} = request.body;

        const getUserService = new GetUserService();

        const updatedInfo = await getUserService.execute({nome, cep, rendaMensal, numDependentes});

        return response.json(updatedInfo);
    }
}

export { GetUserController }