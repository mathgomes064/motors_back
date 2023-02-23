import {Entity, Column, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"
   
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

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}