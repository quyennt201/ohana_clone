import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UtilityDto extends BaseDto {
    @Expose()
    @IsNotEmpty()
    name: string  

    @Expose()
    @IsNotEmpty()
    img: string 
}