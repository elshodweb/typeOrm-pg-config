import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Profile {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ unique: true })
	username: string;

	@Column()
	password: string;

	constructor(username: string, password: string) {
		this.username = username;
		this.password = password;
	}
}
