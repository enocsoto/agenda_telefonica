import { PartialType } from '@nestjs/mapped-types';
import { CreateContactoDto } from './create-contactos.dto';

export class UpdateContactoDto extends PartialType(CreateContactoDto) {}
