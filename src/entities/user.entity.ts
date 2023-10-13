import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Profile } from "./profile.entity";
import { Channel } from "./channel.entity";
import { Group } from "./group.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, type: "varchar", length: 32 })
  name: string;

  @Column({ type: "varchar", length: 64 })
  surename: string;

  @Column({
    type: "int",
  })
  age: number;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Channel, (channel) => channel.user)
  channels: Channel[];

  @ManyToMany(() => Group, (g) => g.members)
  groups: Group[];
}
