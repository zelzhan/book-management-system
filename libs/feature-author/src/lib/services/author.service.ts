import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from '../../../../schemas/author.schema';
import { CreateAuthorDTO } from '../dtos/create-author.dto';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel('author') private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDTO): Promise<Author> {
    const createdCat = new this.authorModel(createAuthorDto);
    return createdCat.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }
}
