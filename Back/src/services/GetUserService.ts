import { router } from "../routes"
import fetch from "cross-fetch"
interface IGetUserService{
    nome: string;
    cep: number;
    rendaMensal: number;
    numDependentes: number;
}



class GetUserService {
    async execute({nome, cep, rendaMensal, numDependentes} : IGetUserService){
                
        
        

        const response = await fetch(`//viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            if (res.status >= 400) {
            throw new Error("Bad response from server");
            }
            return res.json();
            })
            .then(endereco => {
            return endereco;
            })
        .catch(err => {
        console.error(err);
  });;
        
        const endereco = response;
        console.log(endereco);

        

        const rendaPerCapita = rendaMensal / numDependentes;
        
        const userInfo = {nome: nome, endereco, rendaPerCapita};

        console.log(userInfo)

        return userInfo;
    }
}

export { GetUserService }