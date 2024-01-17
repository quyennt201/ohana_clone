import { IsArray } from 'class-validator';
import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity } from 'typeorm';
import { post_enum } from './post.enum';

@Entity('post')
export class PostEntity extends BaseEntity {
  // @Column({ default: '' })
  // @IsArray()
  // img: string;

  @Column({ name: 'kind_room_id', default: '' })
  kindRoomId: string;

  @Column({ default: 1 })
  number: number;

  @Column({ default: 1 })
  capacity: number;

  @Column({ name: 'room_area', default: 20 })
  roomArea: number;

  @Column({ default: '2024-01-01' })
  start: Date;

  @Column({ default: 100 })
  expense: number;

  @Column({ default: 100 })
  deposit: number;

  @Column({ default: 100 })
  electricity: number;

  @Column({ default: 100 })
  water: number;

  @Column({ default: 100 })
  wifi: number;

  @Column({ default: 0 })
  vehicle: number;

  @Column({
    type: 'enum',
    enum: ['all', 'male', 'female'],
    default: 'all',
  })
  gender: string;

  @Column({ default: 'hn' })
  city: string;

  @Column({ default: 'hn' })
  district: string;

  @Column({ default: 'hn' })
  ward: string;

  @Column({ name: 'specific_address', default: '' })
  specificAddress: string;

  // @Column({default: ""})
  // @IsArray()
  // utilities: string 

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ name: 'owner_id', default: '' })
  ownerId: string;

  @Column({ default: false })
  favorited: boolean;

  @Column({ default: false })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: post_enum.status,
    default: 'cho duyet'
  })
  status: string 
}
