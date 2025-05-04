import { Module } from '@nestjs/common';
import { SocialMediaTypeService } from './social_media_type.service';
import { SocialMediaTypeController } from './social_media_type.controller';

@Module({
  controllers: [SocialMediaTypeController],
  providers: [SocialMediaTypeService],
})
export class SocialMediaTypeModule {}
