import { Auditoria } from 'src/modules/global/entities/auditoria.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('perfil')
export class Perfil {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  dtanascimento: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  foto: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  titulo_profissional: string;

  @Column({ nullable: true })
  curso: string;

  @Column({ nullable: true })
  periodo: string;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  site: string;

  @OneToOne(() => Usuario, (usuario) => usuario.perfil)
  usuario: Usuario;

  @Column(() => Auditoria)
  audit: Auditoria;
}
