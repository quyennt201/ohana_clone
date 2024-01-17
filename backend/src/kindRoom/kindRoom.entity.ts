import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, Unique } from 'typeorm';

@Entity('kindroom')
export class KindRoomEntity extends BaseEntity {
  @Column()
  @Unique(['name'])
  name: string;
}
