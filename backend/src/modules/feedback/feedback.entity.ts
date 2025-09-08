import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../usuario/entities/usuario.entity";

export class Feedback {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nota: number;

    @Column()
    comentario: string;

    @Column()
    remetente: Usuario;

    @ManyToOne( () => Usuario, usuario => usuario.feedbacks )
    usuario: Usuario;

}