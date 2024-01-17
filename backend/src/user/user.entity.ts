import { BaseEntity } from 'src/common/base.entity';
import {
  Entity,
  Column,
  Unique,
} from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ default: '' })
  avt: string;

  @Unique(['phonenumber'])
  @Column()
  phonenumber: string;

  @Column({ default: '' })
  zalo: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Unique(['email'])
  @Column()
  email: string;

  @Column({ default: '' })
  fb: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: string;
}
