import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import { FavouritesService } from "./favourites.service";
import { CreateFavouriteDto } from "./dto/create-favourite.dto";

@Controller("favourites")
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Post()
  async addFavourite(@Body() createFavouriteDto: CreateFavouriteDto) {
    return this.favouritesService.addFavourite(createFavouriteDto);
  }

  @Delete()
  async removeFavourite(
    @Query("user_id") userId: number,
    @Query("discount_id") discountId: number
  ) {
    return this.favouritesService.removeFavourite(userId, discountId);
  }

  @Get("user/:userId")
  async getUserFavourites(@Param("userId") userId: number) {
    return this.favouritesService.findUserFavourites(userId);
  }

  @Get("check")
  async isFavourite(
    @Query("user_id") userId: number,
    @Query("discount_id") discountId: number
  ) {
    const isFav = await this.favouritesService.isFavourite(userId, discountId);
    return { isFavourite: isFav };
  }
}
