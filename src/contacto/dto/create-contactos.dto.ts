import { IsEmail, IsNotEmpty, IsString, MinLength, min } from "class-validator";

export class CreateContactoDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    nombre: string;
   
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    apellido: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    tipo_documento: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    numero_documento: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    edad: string;

    @IsNotEmpty()
    @IsEmail()
    @MinLength(1)
    correo: string;

}
