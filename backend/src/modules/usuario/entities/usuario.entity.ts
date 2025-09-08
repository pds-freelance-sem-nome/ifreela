import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
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

}