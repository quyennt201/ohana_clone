import { Expose } from "class-transformer";

export class ImgDto {
    @Expose()
    id: string 

    @Expose()
    postId: string

    @Expose()
    url: string 
}