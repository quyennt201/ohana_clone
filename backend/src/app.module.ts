import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { UserEntity } from './user/user.entity';
import { KindRoomModule } from './kindRoom/kindRoom.module';
import { KindRoomEntity } from './kindRoom/kindRoom.entity';
import { UtilityModule } from './utility/utility.module';
import { UtilityEntity } from './utility/utility.entity';
import { AuthModule } from './auth/auth.module';
import { PostEntity } from './post/post.entity';
import { PostModule } from './post/post.module';
import { UtilityOfPostModule } from './utility_post/utility-post.module';
import { UtilityOfPostEntity } from './utility_post/utility-post.entity';
import { ImgModule } from './img/img.module';
import { ImgEntity } from './img/img.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'ohana',
      entities: [
        UserEntity,
        KindRoomEntity,
        UtilityEntity,
        PostEntity,
        UtilityOfPostEntity,
        ImgEntity
      ],
      synchronize: true, // dong bo entity - csdl
      logging: ['query'],
      logger: 'file',
    }),
    UserModule,
    KindRoomModule,
    UtilityModule,
    AuthModule,
    PostModule,
    UtilityOfPostModule,
    ImgModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
