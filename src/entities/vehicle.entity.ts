import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm"
import { v4 as uuid } from "uuid"
import { Comment } from "./comment.entity"
import { User } from "./user.entity"
import { VehicleImages } from "./vehicleImages.entity"

// Relacionamento Many to One com User (Lado Many)
   
@Entity("vehicle")
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
    owner: string

    @Column()
    created_at: Date

    @ManyToOne((type) => User, user => user.vehicle)
    user: User

    @OneToMany(() => VehicleImages, (vehicleImages) => vehicleImages.vehicle, {
        eager: true,
      })
      vehicleImages: VehicleImages[];


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}