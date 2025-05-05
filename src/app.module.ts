import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { AuthModule } from "./auth/auth.module";
import { MailModule } from "./mail/mail.module";
import { BotModule } from "./bot/bot.module";

import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.constants";
import { SocialMediaTypeModule } from "./social_media_type/social_media_type.module";
import { StoreSocialLinksModule } from "./store_social_links/store_social_links.module";
import { TypeModule } from "./type/type.module";
import { CategoryModule } from "./category/category.module";
import { DiscountsModule } from "./discounts/discounts.module";
import { Bot } from "./bot/model/bot.model";
import { SocialMediaType } from "./social_media_type/models/social_media_type.entity";
import { AdsModule } from "./ads/ads.module";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { FavouritesModule } from "./favourites/favourites.module";
import { StoreModule } from "./store/store.module";
import { StatusModule } from "./status/status.module";
import { MediaModule } from "./media/media.module";
import { Admin } from "./admin/models/admin.model";
import { Ads } from "./ads/models/ad.model";
import { Category } from "./category/models/category.model";
import { Discount } from "./discounts/models/discount.model";
import { District } from "./district/models/district.model";
import { Favourites } from "./favourites/models/favourite.model";
import { Media } from "./media/models/media.model";
import { Region } from "./region/models/region.model";
import { Review } from "./reviews/models/review.model";
import { Status } from "./status/models/status.model";
import { Store } from "./store/models/store.model";
import { StoreSocialLink } from "./store_social_links/models/store_social_link.model";
import { Type } from "./type/models/type.model";

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
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),

    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN!,
        middlewares: [],
        include: [BotModule],
      }),
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        User,
        Bot,
        Admin,
        Ads,
        Category,
        Discount,
        District,
        Favourites,
        Media,
        Region,
        Review,
        SocialMediaType,
        Status,
        Store,
        StoreSocialLink,
        Type,
      ],
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
    AdsModule,
    RegionModule,
    DistrictModule,
    ReviewsModule,
    FavouritesModule,
    StoreModule,
    StatusModule,
    MediaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
