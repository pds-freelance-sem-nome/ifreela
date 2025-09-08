import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './modules/usuario/entities/usuario.entity';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { Perfil } from './modules/usuario/entities/perfil.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'postgres',
        port: 5432,
        username: 'user',
        password: 'password',
        database: 'db',
        entities: [Usuario, Perfil],
        synchronize: true,
        logging: true, // Adicionar logging para ver os SQLs
      }
    ),
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
