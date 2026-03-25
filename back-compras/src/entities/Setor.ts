import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('setor')
export class Setor{

    @PrimaryGeneratedColumn("uuid")
    id_setor!: string;

    @Column({ type: 'varchar', nullable: false })
    nome_setor!: string;
}