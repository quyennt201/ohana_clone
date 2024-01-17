import { DeleteResult } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseEntity } from './base.entity';

export interface IBaseService<T, Dto> {
  save(dto: Dto): Promise<Dto>
  findOne(id: string): Promise<Dto>
  findAll(): Promise<Dto[]>
  update(id: string, dto: Dto): Promise<{result: string}>
  delete(id: string): Promise<{result: string}>
}
