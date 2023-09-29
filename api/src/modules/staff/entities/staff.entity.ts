import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntityWithUUID } from '../../../common/base.entity';
import { hashPassword } from '../../../helpers/password.helpers';
import { Exclude } from 'class-transformer';
import { Attendance } from './attendance.entity';

@Entity()
export class Staff extends BaseEntityWithUUID {
  @Column()
  staffId: string

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  passwordHash: string;

  @Exclude()
  @Column({ nullable: true })
  accessToken: string;

  @Column({ unique: true })
  username: string;


  @BeforeInsert()
  async hashUserPassword() {
    if (this.passwordHash) {
      this.passwordHash = await hashPassword(this.passwordHash);
    }
  }

  @OneToOne(() => Attendance, attendance => attendance.staff)
  @JoinColumn()
  attendance: Attendance;
}
