import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Perfil } from "./perfil.entity";
import { Feedback } from "src/modules/feedback/feedback.entity";

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @OneToMany( () => Feedback, feedback => feedback.remetente )
    feedbacks: Feedback[];

}