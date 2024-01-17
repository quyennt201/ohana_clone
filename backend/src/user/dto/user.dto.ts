import { Expose, Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from "class-validator"
import { BaseDto } from "src/common/base.dto"
import { PostEntity } from "src/post/post.entity"

export class UserDto extends BaseDto {
    @Expose()
    avt: string

    @Expose()
    @IsNotEmpty()
    @IsPhoneNumber("VN")
    phonenumber: string

    @Expose()
    zalo: string

    @IsNotEmpty()
    firstname: string 

    @IsNotEmpty()
    lastname: string 

    @Transform(({obj}) => obj.firstname + ' ' + obj.lastname)
    @Expose()
    fullname: string 

    @Expose()
    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @Expose()
    fb: string 

    @Length(6, 20)
    password: string 

    @Expose()
    post: PostEntity[]
}