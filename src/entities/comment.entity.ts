import {Entity, Column, PrimaryColumn, OneToMany, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./user.entity"
import { Vehicle } from "./vehicle.entity"


@Entity()
export class Comment{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    description: string

    @Column()
    create_at: Date
    
    @OneToMany((type) => User, user => user.comment,  {
        eager: true,
        onDelete: "CASCADE"
    })
    user: User[]

    @ManyToOne(() => Vehicle,{
        onDelete: "CASCADE",
      })

    vehicle: Vehicle;
  

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}