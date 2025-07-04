import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export default class Logins extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  //Methods
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, genSaltSync(10));
  }

  validatePassword(password: string): boolean {
    return compareSync(password, this.password);
  }
}