import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../usuario/entities/usuario.entity";

@Entity('feedback')
export class Feedback {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nota: number;

    @Column()
    comentario: string;

    @ManyToOne(() => Usuario)
    remetente: Usuario;

    @ManyToOne(() => Usuario, usuario => usuario.feedbacks)
    destinatario: Usuario;

}