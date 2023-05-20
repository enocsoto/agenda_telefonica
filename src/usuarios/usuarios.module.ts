import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosEntity } from './entities/usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UsuariosEntity], 'agenda_contacto')],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
