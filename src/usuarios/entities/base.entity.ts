import { CreateDateColumn, PrimaryColumn,  UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryColumn('uuid', { primary: true, name: "id", length: 255 })
    id: string;


    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at'
    })
    createdAt: Date;
    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at'
    })
    updatedAt: Date;

}