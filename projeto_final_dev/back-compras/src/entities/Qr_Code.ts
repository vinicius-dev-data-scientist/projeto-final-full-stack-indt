import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item.js";
import { Usuario } from "./Usuario.js";


@Entity('qr_code')

export class Qr_Code{
    @PrimaryGeneratedColumn("uuid")
    id_qr_code!: string;

    @OneToOne(() => Item , (item) => item.qr_code_id)
    @JoinColumn({ name: "id_item"})
    item_id!: Item;

    @Column({ type: 'text' })
    conteudo?: string;

    @Column({ type: 'text', nullable: false, unique: true })
    imagem_base64!: string;

    @Column({ type: 'boolean', nullable: false })
    ativo!: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    criado_em!: Date;

    @ManyToOne(() => Usuario, (usuario) => usuario.qr_code_id)
    @JoinColumn({ name: "id_usuario" })
    gerado_por!: Usuario;
}