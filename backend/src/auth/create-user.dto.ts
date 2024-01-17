import { Expose } from "class-transformer"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @Expose()
    @IsNotEmpty()
    @IsEmail()
    email: string 

    @Expose()
    @IsNotEmpty()
    password: string 

    @Expose()
    // @IsNotEmpty()
    phonenumber: string 

    @Expose()
    // @IsNotEmpty()
    firstname: string 

    @Expose()
    // @IsNotEmpty()
    lastname: string 
}