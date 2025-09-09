import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './modules/usuario/entities/usuario.entity';
import { Perfil } from './modules/usuario/entities/perfil.entity';
import { Feedback } from './modules/feedback/feedback.entity';
import { Categoria } from './modules/categoria/categoria.entity';
import {
  UsuarioServico,
  UsuarioServicoCategoria,
} from './modules/usuario/entities/servico.entity';
import { Chat, ChatMensagem } from './modules/chat/entities/chat.entity';
import { Status } from './modules/projeto/entities/status.entity';
import {
  Projeto,
  ProjetoCategoria,
  ProjetoProposta,
  ProjetoStatus,
} from './modules/projeto/entities/projeto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'db',
      entities: [
        Usuario,
        Perfil,
        Feedback,
        Categoria,
        UsuarioServico,
        UsuarioServicoCategoria,
        Chat,
        ChatMensagem,
        Status,
        Projeto,
        ProjetoCategoria,
        ProjetoProposta,
        ProjetoStatus,
      ],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
      autoLoadEntities: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
