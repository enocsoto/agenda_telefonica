import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ContactoEntity } from "./contacto.entity";
import { BaseEntity } from "./base.entity";


@Entity("telefonos", { schema: "agendaDB" })
export class TelefonosEntity extends BaseEntity{

  // @Column("varchar", { name: "usuarios_id", nullable: true, length: 255 })
  // usuariosId: string | null;
  
  @Column("varchar", { name: "tipo", length: 255 })
  tipo: string;

  @ManyToOne(() => ContactoEntity, (contactos) => contactos.telefonos, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  telefonos_contactos: ContactoEntity;
}
