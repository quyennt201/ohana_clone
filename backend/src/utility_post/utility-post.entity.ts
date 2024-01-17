import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, Index, Unique } from 'typeorm';

@Entity('utility_post')
@Index(['postId', 'utilityId'], { unique: true })
export class UtilityOfPostEntity extends BaseEntity {
  @Column()
  postId: string;

  @Column()
  utilityId: string;
}
