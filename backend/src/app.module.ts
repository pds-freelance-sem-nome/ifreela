import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './modules/usuario/entities/usuario.entity';
import { UsuarioModule } from './modules/usuario/usuario.module';

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
        entities: [Usuario],
        synchronize: true,
      }
    ),
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
