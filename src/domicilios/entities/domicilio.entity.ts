import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UsuariosEntity } from "../../usuarios//entities/usuario.entity";

@Index("usuarios_id", ["usuariosId"], {})
@Entity("domicilios", { schema: "agendaDB" })
export class DomiciliosEntity {
  @PrimaryColumn("uuid", { primary: true, name: "id", length: 255 })
  id: string;

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

  @ManyToOne(() => UsuariosEntity, (usuarios) => usuarios.domicilios, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuarios_id", referencedColumnName: "id" }])
  usuarios: UsuariosEntity;
}
