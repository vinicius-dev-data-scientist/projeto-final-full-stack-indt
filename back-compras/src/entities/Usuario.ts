import { Column, CreateDateColumn, DeleteDateColumn, Entity, ForeignKey, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Perfil } from "../types/Perfil.js";

@Entity('usuario')
export class Usuario{

    @PrimaryGeneratedColumn("uuid") //increment
    id_user!: string; // "!" -> variável que será inicializada posteriormente, caso contrário, haverá erros

    @Column({ type: 'varchar', nullable: false })
    nome!: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    email!: string;

    @Column({ type: 'varchar', select: false, nullable: false }) //select: false (não vir no select) | CRIAR HASH PRA SENHA
    password!: string;

    @Column({ type: 'enum', enum: Perfil, default: Perfil.OPER })
    grupo!: Perfil;

    @Column({ type: 'int'})
    setorId?: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    

    //@UpdateDateColumn
    //@DeleteDateColumn

}

//bloqueio por ip que fazem múltiplas requisições (por sessão)