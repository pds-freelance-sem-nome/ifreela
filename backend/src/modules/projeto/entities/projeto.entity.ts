import { Categoria } from 'src/modules/categoria/categoria.entity';
import { Auditoria } from 'src/modules/global/entities/auditoria.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from './status.entity';

@Entity('projeto')
export class Projeto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  requisitos: string;

  @Column()
  entregaveis: string;

  @Column()
  prazo: Date;

  @OneToOne(() => ProjetoProposta)
  proposta: 'ProjetoProposta';

  @ManyToOne(() => Usuario)
  usuario: Usuario;

  @Column(() => Auditoria)
  audit: Auditoria;
}

@Entity('projeto_categoria')
export class ProjetoCategoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Projeto)
  projeto: Projeto;

  @ManyToOne(() => Categoria)
  categoria: Categoria;
}

@Entity('projeto_proposta')
export class ProjetoProposta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prazoSugerido: Date;

  @Column()
  ofertaSugerido: Number;

  @Column()
  descricao: string;

  @ManyToOne(() => Projeto)
  projeto: Projeto;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}

@Entity('projeto_status')
export class ProjetoStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Projeto)
  projeto: Projeto;

  @ManyToOne(() => Status)
  status: Status;
}
