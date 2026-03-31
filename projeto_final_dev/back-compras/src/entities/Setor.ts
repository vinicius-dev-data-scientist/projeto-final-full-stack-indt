import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Maquina } from "./Maquina.js";
import { Item } from "./Item.js";
import { Historico } from "./Historico.js";

@Entity('setor')
export class Setor{

    @PrimaryGeneratedColumn("uuid")
    id_setor!: string;

    @Column({ type: 'varchar', nullable: false })
    nome!: string;

    @Column({ type: 'varchar' })
    descricao?: string;

    @Column({ type: 'boolean' })
    ativo!: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    criado_em!: Date

    @OneToMany(() => Maquina, (maquina) => maquina.setor_id)
    @JoinColumn({ name: "id_maquina" })
    maquina_id!: Maquina[];

    @OneToMany(() => Item, (item) => item.setor_atual_id)
    @JoinColumn({ name: "id_item" })
    item_id!: Item[];

    @OneToMany(() => Historico, (historico) => historico.setor_origem_id)
    @JoinColumn({ name: "id_historico" })
    historico_origem_id!: Historico[];

    @OneToMany(() => Historico, (historico) => historico.setor_destino_id)
    @JoinColumn({ name: "id_historico" })
    historico_destino_id!: Historico[];
}