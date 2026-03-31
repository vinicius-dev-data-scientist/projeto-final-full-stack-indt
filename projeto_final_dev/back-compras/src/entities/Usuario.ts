import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Perfil } from "../types/Perfil.js";
import { Item } from "./Item.js";
import { Qr_Code } from "./Qr_Code.js";
import { Historico } from "./Historico.js";

@Entity('usuario')
export class Usuario{

    @PrimaryGeneratedColumn("uuid") //increment
    id_user!: string; // "!" -> variável que será inicializada posteriormente, caso contrário, haverá erros

    @Column({ type: 'varchar', nullable: false })
    nome!: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    email!: string;

    @Column({ type: 'varchar', select: false, nullable: false }) //select: false (não vir no select) | CRIAR HASH PRA SENHA
    senha!: string;

    @Column({ type: 'enum', enum: Perfil, default: Perfil.OPER })
    perfil!: Perfil;

    @Column({ type: 'boolean', nullable: false})
    ativo?: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    criado_em!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    atualizado_em!: Date;

    @OneToMany(() => Item, (item) => item.criado_por)
    @JoinColumn({ name: "id_item" })
    item_id!: Item[];

    @OneToMany(() => Qr_Code, (qr_code) => qr_code.gerado_por)
    @JoinColumn({ name: "id_qr_code" })
    qr_code_id!: Item[];

    @OneToMany(() => Historico, (historico) => historico.operador_id)
    @JoinColumn({ name: "id_historico" })
    historico_id!: Item[];

    

    //@UpdateDateColumn
    //@DeleteDateColumn

}

//bloqueio por ip que fazem múltiplas requisições (por sessão)