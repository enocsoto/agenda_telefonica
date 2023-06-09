import { Column, Entity, ManyToOne } from "typeorm";
import { ContactoEntity } from "./contacto.entity";
import { BaseEntity } from "./base.entity";


@Entity("domicilios", { schema: "agendaDB" })
export class DomiciliosEntity extends BaseEntity{

  @Column("varchar", { name: "usuarios_id", length: 255 })
  usuariosId: string;

  @Column("varchar", { name: "localidad", length: 255 })
  localidad: string;

  @Column("varchar", { name: "calle", length: 255 })
  calle: string;

  @Column("varchar", { name: "altura", length: 255 })
  altura: string;

  @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
  descripcion: string | null;

  @ManyToOne(() => ContactoEntity, (usuarios) => usuarios.domicilios, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  domicilios_contactos: ContactoEntity;
}
