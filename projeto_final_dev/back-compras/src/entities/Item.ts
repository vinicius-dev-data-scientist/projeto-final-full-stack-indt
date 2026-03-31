import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StatusItem } from "../types/StatusItem.js";
import { Setor } from "./Setor.js";
import { Usuario } from "./Usuario.js";
import { Qr_Code } from "./Qr_Code.js";
import { Historico } from "./Historico.js";



@Entity('item')
export class Item{
    @PrimaryGeneratedColumn("uuid")
    item_id!: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    codigo_unico!: string;

    @Column({ type: 'varchar' })
    descricao?: string;

    @Column({ type: 'varchar', nullable: false })
    tipo!: string;

    @Column({ type: 'varchar', nullable:false })
    lote!: string;

    @Column({ type: 'enum', enum: StatusItem, default: StatusItem.EM_PRODUCAO })
    status!: StatusItem;

    @ManyToOne(() => Setor, (setor) => setor.item_id)
    @JoinColumn({ name: "id_setor" })
    setor_atual_id!: Setor;

    @ManyToOne(() => Usuario, (usuario) => usuario.item_id)
    @JoinColumn({ name: "id_usuario" })
    criado_por!: Usuario;

    @CreateDateColumn({ type: 'timestamp' })
    criado_em!: Date;
    
    @UpdateDateColumn({ type: 'timestamp' })
    atualizado_em!: Date;

    @OneToOne(() => Qr_Code , (qr_code) => qr_code.item_id)
    @JoinColumn({ name: "id_qr_code"})
    qr_code_id!: Item;

    @OneToMany(() => Historico, (historico) => historico.item_id)
    @JoinColumn({ name: "id_historico" })
    historico_id!: Item[];

}