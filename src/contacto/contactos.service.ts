import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contactos.dto';
import { UpdateContactoDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { ContactoEntity } from './entities/contacto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Telefonos } from '../../output/entities/Telefonos';
import { Domicilios } from '../../output/entities/Domicilios';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(ContactoEntity, 'agenda_contacto')
    private readonly usuarioRepository: Repository<ContactoEntity>) { }

  async createUser(createUsuarioDto: CreateContactoDto): Promise<ContactoEntity> {
    createUsuarioDto.nombre = createUsuarioDto.nombre.toLowerCase()
    createUsuarioDto.apellido = createUsuarioDto.apellido.toLowerCase()
    try {
      return await this.usuarioRepository.save(createUsuarioDto);

    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAllUsers(): Promise<ContactoEntity[]> {
    return this.usuarioRepository.find()
  }

  async findOneUser(term: string):Promise<ContactoEntity> {
    let contacto : ContactoEntity;
    if (!isNaN(+term)) {
      contacto = await this.usuarioRepository.findOne({
        where: {
          correo: term.toLowerCase().trim(),
          numero_documento: term.toLowerCase().trim()
        }
      });
    }if(term[0] ){
      contacto = await this.usuarioRepository.createQueryBuilder('contacto').where({Telefonos}).getOne()
    }else{
      contacto = await this.usuarioRepository.createQueryBuilder('domicilio').where({Domicilios}).getOne()

    }
  
    return contacto;
  }

  updateUser(id: number, updateUsuarioDto: UpdateContactoDto) {
    return `This action updates a #${id} usuario`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} usuario`;
  }
  private handleExceptions(error: any) {
    if (error.errno === 1062){

      throw new BadRequestException(`Usuario exists in bd ${JSON.stringify(error.sqlMessage)}`);
    }
  }
}
