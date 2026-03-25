import { Column, Entity, ForeignKey, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity('processo')
export class Processo{

@PrimaryGeneratedColumn("uuid")
id_processo!: string





}