import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('img')
export class ImgEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  postId: string

  @Column()
  url: string;
}
