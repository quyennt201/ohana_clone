import { Expose } from 'class-transformer';
import { IsArray, IsEmpty } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';
import { KindRoomDto } from 'src/kindRoom/kindRoom.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { UtilityDto } from 'src/utility/utility.dto';

export class PostDto extends BaseDto {
  @Expose()
  img: string[];

  kindRoomId: string 

  @Expose()
  kindRoom: string;

  @Expose()
  number: number;

  @Expose()
  capacity: number;

  @Expose()
  roomArea: number;

  @Expose()
  start: Date;

  @Expose()
  expense: number;

  @Expose()
  deposit: number;

  @Expose()
  electricity: number;

  @Expose()
  water: number;

  @Expose()
  wifi: number;

  @Expose()
  vehicle: number;

  @Expose()
  gender: string;

  @Expose()
  city: string;

  @Expose()
  district: string;

  // @IsEmpty()
  @Expose()
  ward: string;

  // @IsEmpty()
  @Expose()
  specificAddress: string;

  @IsArray()
  utilitiesId: Array<string> 

  @Expose()
  // @IsArray()
  utilities: UtilityDto[];

  // @IsEmpty()
  @Expose()
  title: string;

  // @IsEmpty()
  ownerId: string;

  @Expose()
  owner: UserDto;

  @Expose()
  favorited: boolean;

  @Expose()
  isActive: boolean;

  @Expose()
  status: string;
}
