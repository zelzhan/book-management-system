import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../../../../schemas/book.schema';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class BooksService {
  constructor(@InjectModel('book') private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDTO): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async find(id: ObjectId) {
    return this.bookModel
      .findOne({
        _id: id,
      })
      .exec();
  }
}
