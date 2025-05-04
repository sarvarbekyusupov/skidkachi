import { Module } from '@nestjs/common';
import { StoreSocialLinksService } from './store_social_links.service';
import { StoreSocialLinksController } from './store_social_links.controller';

@Module({
  controllers: [StoreSocialLinksController],
  providers: [StoreSocialLinksService],
})
export class StoreSocialLinksModule {}
