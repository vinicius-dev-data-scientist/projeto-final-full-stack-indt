import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Setor } from "./Setor.js";

@Entity('maquina')
export class Maquina{

@PrimaryGeneratedColumn("uuid")
id_maquina!: string;

@ManyToOne(() => Setor, (setor) => setor.maquina_id)
@JoinColumn({ name: "id_setor" })
setor_id!: Setor;

@Column({ type: 'varchar', nullable: false })
nome!: string;

@Column({ type: 'varchar', nullable: false, unique: true })
codigo!: string;

@Column({ type: 'varchar' })
descricao?: string;

@Column({ type: 'boolean', nullable: false })
ativo!: boolean;
}