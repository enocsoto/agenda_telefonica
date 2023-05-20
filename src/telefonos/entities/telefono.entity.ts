import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UsuariosEntity } from "./../../usuarios//entities/usuario.entity";

@Index("usuarios_id", ["usuariosId"], {})
@Entity("telefonos", { schema: "agendaDB" })
export class TelefonosEntity {
  @PrimaryColumn("uuid", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "usuarios_id", nullable: true, length: 255 })
  usuariosId: string | null;

  @Column("varchar", { name: "telefono", length: 255 })
  telefono: string;

  @Column("varchar", { name: "tipo", length: 255 })
  tipo: string;

  @ManyToOne(() => UsuariosEntity, (usuarios) => usuarios.telefonos, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuarios_id", referencedColumnName: "id" }])
  usuarios: UsuariosEntity;
}
