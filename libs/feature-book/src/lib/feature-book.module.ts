import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from '../../../schemas/book.schema';
import { BooksService } from './services/books.service';
import { BooksController } from './controllers/books.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'book', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [],
})
export class FeatureBookModule {}
