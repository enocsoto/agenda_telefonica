import { IsEmail, IsString, MinLength, min } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    apellido: string;

    @IsString()
    @MinLength(1)
    tipo_documento: string;

    @IsString()
    @MinLength(1)
    numero_documento: string;

    @IsString()
    @MinLength(1)
    edad: string;

    @IsEmail()
    @MinLength(1)
    correo: string;

}
