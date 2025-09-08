import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Perfil } from './entities/perfil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Perfil])],
  controllers: [],
  providers: [],
  exports: [],
})
export class UsuarioModule {}