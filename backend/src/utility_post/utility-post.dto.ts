import { Expose } from "class-transformer";
import { BaseDto } from "src/common/base.dto";

export class UtilityOfPostDto extends BaseDto {
    @Expose()
    postId: string 

    @Expose()
    utilityId: string 
}