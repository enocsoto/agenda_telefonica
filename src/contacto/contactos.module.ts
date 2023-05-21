import { Module } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { ContactosController } from './contactos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoEntity } from './entities/contacto.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ContactoEntity], 'agenda_contacto')],
  controllers: [ContactosController],
  providers: [ContactosService]
})
export class ContactosModule {}
