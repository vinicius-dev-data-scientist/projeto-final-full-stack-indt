import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item.js";
import { Usuario } from "./Usuario.js";
import { Setor } from "./Setor.js";
import { Acao } from "../types/Acao.js";


@Entity('historico')

export class Historico{

    @PrimaryGeneratedColumn("uuid")
    id_historico!: string;

    @ManyToOne(() => Item, (item) => item.historico_id)
    @JoinColumn({ name: "id_item" })
    item_id!: Item;

    @ManyToOne(() => Usuario, (usuario) => usuario.historico_id)
    @JoinColumn({ name: "id_usuario" })
    operador_id!: Usuario;

    @ManyToOne(() => Setor, (setor) => setor.historico_origem_id)
    @JoinColumn({ name: "id_setor" })
    setor_origem_id!: Setor;

    @ManyToOne(() => Setor, (setor) => setor.historico_destino_id)
    @JoinColumn({ name: "id_setor" })
    setor_destino_id!: Setor;

    @Column({ type: 'enum', enum: Acao, default: Acao.CRIACAO })
    acao!: Acao;

    @Column({ type: 'varchar'})
    status_anterior!: string;

    @Column({ type: 'varchar', nullable: false })
    status_novo!: string;

    @Column({ type: 'text' })
    observacao?: string;

    @Column({ type: 'boolean', nullable: false })
    tem_defeito!: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    criado_em!: Date;

}