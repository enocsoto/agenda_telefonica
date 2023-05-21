import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { DomiciliosEntity } from "./domicilio.entity";
import { TelefonosEntity } from "./telefono.entity";
import { BaseEntity } from "./base.entity";


@Index(["tipo_documento","correo" ], { unique: true })
@Entity("usuarios", { schema: "agendaDB" })
export class ContactoEntity extends BaseEntity {
  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("varchar", { name: "apellido", length: 255 })
  apellido: string;

  @Column("varchar", { name: "tipo_documento", unique: true, length: 50 })
  tipo_documento: string;

  @Column("varchar", { name: "numero_documento", length: 255 })
  numero_documento: string;

  @Column("varchar", { name: "edad", length: 30 })
  edad: string;

  @Column("varchar", { name: "correo", unique: true, length: 255 })
  correo: string;

  @OneToMany(() => DomiciliosEntity, (domicilios) => domicilios.domicilios_contactos)
  domicilios: DomiciliosEntity[];

  @OneToMany(() => TelefonosEntity, (telefonos) => telefonos.telefonos_contactos)
  telefonos: TelefonosEntity[];
}
