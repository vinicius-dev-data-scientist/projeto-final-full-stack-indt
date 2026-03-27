import type { DataSource, Repository } from "typeorm";
import { Usuario } from "../entities/Usuario.js";
import bcrypt from "bcryptjs";


export class UsuarioServices { //exportar pra habilidades as funções criadas aqui

    //comunicação com o banco (respectiva tabela)
    private userRepo: Repository<Usuario>;

    constructor(appDataSource: DataSource) {
        this.userRepo = appDataSource.getRepository(Usuario);

    }

    async getAll() {
        return this.userRepo.find();

    }

    async getById(id: string){
        const user = await this.userRepo.findBy({ id_user: id });

        if(!user) {
            throw new Error("Usuário não foi encontrado!")
        }

        return user;
    }

    async getByEmail(email: string){
        const user = await this.userRepo.findBy({ email: email });

        if(!user) {
            throw new Error("E-mail não foi encontrado!")
        }

        return user;
    }

    async createUser(data: Usuario){
        const usuario = await this.userRepo.findBy({ email: data.email }) 
        
        //como ficaria com a função getByEmail?

        if(usuario){
            throw new Error("Usuário já cadastrado");
        }


        //data é um objeto javascript (chave-valor)
        data.password = await bcrypt.hash(data.password, 12);

        //colocar dados de acordo com o banco de dados
        const novoUsuario = await this.userRepo.create(data);

        await this.userRepo.save(novoUsuario);

        return novoUsuario;
    }

    async updateUser(data: Usuario){

        const usuarioExistente = await this.userRepo.findOneBy({ email: data.email });

        if(usuarioExistente){
            throw new Error("Usuário já cadastrado");
        }

        data.password = await bcrypt.hash(data.password, 12);
        const novoUsuario = this.userRepo.create(data);
        return await this.userRepo.save(novoUsuario);
        
    }

    async deleteUser(id: string){
        const user = await this.userRepo.findBy({ id_user: id });

        if(!user){
            throw new Error("Usuário não encontrado!");
        }

        await this.userRepo.remove(user);
    }

}