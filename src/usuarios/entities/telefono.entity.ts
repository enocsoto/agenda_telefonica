import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UsuariosEntity } from "./usuario.entity";
import { BaseEntity } from "./base.entity";


@Entity("telefonos", { schema: "agendaDB" })
export class TelefonosEntity extends BaseEntity{

  @Column("varchar", { name: "tipo", length: 255 })
  tipo: string;

  @ManyToOne(() => UsuariosEntity, (usuarios) => usuarios.telefonos, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  telefonos_usuarios: UsuariosEntity;
}
