-- Crear tabla "usuarios"
CREATE TABLE `agendaDB`.`usuarios` (
    id VARCHAR(255) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    tipo_documento VARCHAR(50) NOT NULL UNIQUE,
    numero_documento VARCHAR(255) NOT NULL,
    edad VARCHAR(30) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE
);

-- Crear tabla "telefonos"
CREATE TABLE `agendaDB`.`telefonos` (
    id VARCHAR(255) PRIMARY KEY,
    usuarios_id VARCHAR(255),
    telefono VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id)
        ON DELETE CASCADE
);

-- Crear tabla "domicilios"
CREATE TABLE `agendaDB`.`domicilios` (
    id VARCHAR(255) PRIMARY KEY,
    usuarios_id VARCHAR(255) NOT NULL,
    localidad VARCHAR(255) NOT NULL,
    calle VARCHAR(255) NOT NULL,
    altura VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id)
        ON DELETE CASCADE
);