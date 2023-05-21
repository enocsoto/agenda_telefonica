import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CreateContactoDto } from './dto/create-contactos.dto';
import { UpdateContactoDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class ContactosController {
  constructor(private readonly contactosService: ContactosService) {}

  @Post()
  create(@Body() createContacto: CreateContactoDto) {
    return this.contactosService.createUser(createContacto);
  }

  @Get()
  findAll() {
    return this.contactosService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactosService.findOneUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactoDto: UpdateContactoDto) {
    return this.contactosService.updateUser(+id, updateContactoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactosService.removeUser(+id);
  }
}
