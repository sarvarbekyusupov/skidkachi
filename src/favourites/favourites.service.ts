import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Favourites } from './models/favourite.model';
import { CreateFavouriteDto } from './dto/create-favourite.dto';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectModel(Favourites)
    private readonly favouritesModel: typeof Favourites,
  ) {}

  async addFavourite(createDto: CreateFavouriteDto) {
    return await this.favouritesModel.create(createDto);
  }

  async removeFavourite(user_id: number, discount_id: number) {
    return await this.favouritesModel.destroy({
      where: { user_id, discount_id },
    });
  }

  async findUserFavourites(user_id: number) {
    return await this.favouritesModel.findAll({ where: { user_id } });
  }

  async isFavourite(user_id: number, discount_id: number): Promise<boolean> {
    const fav = await this.favouritesModel.findOne({ where: { user_id, discount_id } });
    return !!fav;
  }
}
