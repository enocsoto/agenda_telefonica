import { Column, Entity, Index, OneToMany, PrimaryColumn } from "typeorm";
import { DomiciliosEntity } from "../../domicilios/entities/domicilio.entity";
import { TelefonosEntity } from "../../telefonos/entities/telefono.entity";

@Index("tipo_documento", ["tipoDocumento"], { unique: true })
@Index("correo", ["correo"], { unique: true })
@Entity("usuarios", { schema: "agendaDB" })
export class UsuariosEntity{
  @PrimaryColumn("uuid", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("varchar", { name: "apellido", length: 255 })
  apellido: string;

  @Column("varchar", { name: "tipo_documento", unique: true, length: 50 })
  tipoDocumento: string;

  @Column("varchar", { name: "numero_documento", length: 255 })
  numeroDocumento: string;

  @Column("varchar", { name: "edad", length: 30 })
  edad: string;

  @Column("varchar", { name: "correo", unique: true, length: 255 })
  correo: string;

  @OneToMany(() => DomiciliosEntity, (domicilios) => domicilios.usuarios)
  domicilios: DomiciliosEntity[];

  @OneToMany(() => TelefonosEntity, (telefonos) => telefonos.usuarios)
  telefonos: TelefonosEntity[];
}
