import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Staff } from './staff.entity';
import { BaseEntityWithUUID } from 'src/common/base.entity';

@Entity()
export class Attendance extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  status: string;

  @OneToOne(()=> Staff, staff => staff.attendance)
  staff : Staff
}
