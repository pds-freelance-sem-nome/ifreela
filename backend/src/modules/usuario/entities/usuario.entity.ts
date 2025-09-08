import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Perfil } from "./perfil.entity";

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: 'enum', enum: ['aluno', 'contratante']})
    tipo: string;

    @Column({nullable: true})
    matricula: string;

    @Column({default: true})
    ativo: boolean;

    @Column({default: false})
    verificado: boolean;

    @OneToOne( () => Perfil, perfil => perfil.usuario )
    perfil: Perfil;

}