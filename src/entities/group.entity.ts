import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 128 })
  name: string;

  @CreateDateColumn({ type: "timestamptz" })
  crated_at: Date;

  @ManyToMany(() => User, (u) => u.groups)
  members: User[];
}
