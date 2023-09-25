import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "person" })
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({name:'gender'})
  gender: string;

  @Column()
  photo: string;
}
