import { Categoria } from 'src/modules/categoria/categoria.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_servico')
export class UsuarioServico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}

@Entity('usuario_servico_categoria')
export class UsuarioServicoCategoria {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsuarioServico)
  usuarioServico: UsuarioServico;

  @ManyToOne(() => Categoria)
  categoria: Categoria;
}
