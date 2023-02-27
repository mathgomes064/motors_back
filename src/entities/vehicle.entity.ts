import {Entity, Column, PrimaryColumn, ManyToOne} from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./user.entity"

// Relacionamento Many to One com User (Lado Many)
   
@Entity()
export class Vehicle{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    title: string

    @Column()
    year: string

    @Column()
    mileage: string

    @Column()
    price: string

    @Column()
    description: string

    @Column()
    type: string

    @Column()
    urlImage: string

    @Column()
    created_at: Date

    @ManyToOne((type) => User, user => user.vehicle)
    user: User

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}