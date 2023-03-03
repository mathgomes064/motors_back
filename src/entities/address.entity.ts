import {Entity, Column, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"

// Relacionamento One to One com user

@Entity()
export class Address{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    cep: string

    @Column() 
    state: string

    @Column()
    city: string

    @Column()
    street: string

    @Column()
    number: string

    @Column({nullable: true})
    complement: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}