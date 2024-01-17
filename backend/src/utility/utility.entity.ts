import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, Unique } from "typeorm";

@Entity("utility")
export class UtilityEntity extends BaseEntity {
    @Column()
    @Unique(['name'])
    name: string 

    @Column()
    img: string 
}