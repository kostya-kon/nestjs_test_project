import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()
export class Coffe {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        flavor => flavor.coffes,
    )
    flavors: Flavor[];
}

