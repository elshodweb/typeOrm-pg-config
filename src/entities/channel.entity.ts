import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Channel {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "varchar", length: 128 })
	name: string;

	@CreateDateColumn({ type: "timestamptz" })
	crated_at: Date;

	@ManyToOne(() => User, (u) => u.channels)
	user: User;
}
