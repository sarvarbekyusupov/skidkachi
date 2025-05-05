import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { BotModule } from './bot/bot.module';

import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { SocialMediaTypeModule } from './social_media_type/social_media_type.module';
import { StoreSocialLinksModule } from './store_social_links/store_social_links.module';
import { TypeModule } from './type/type.module';
import { CategoryModule } from './category/category.module';
import { DiscountsModule } from './discounts/discounts.module';
import { Bot } from './bot/model/bot.model';
import { SocialMediaType } from './social_media_type/models/social_media_type.entity';

// @Module({
//   imports: [
//     TelegrafModule.forRoot({
//       token: 'TELEGRAM_BOT_TOKEN',
//     })
//   ],
// })
// export class AppModule {}



@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:".env", isGlobal:true}),

    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory:()=>({
        token:process.env.BOT_TOKEN!,
        middlewares:[],
        include:[BotModule]
      })
    }),

     SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [User, Bot],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
     UsersModule,
     AuthModule,
     MailModule,
     BotModule,
     SocialMediaTypeModule,
     StoreSocialLinksModule,
     TypeModule,
     CategoryModule,
     DiscountsModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
