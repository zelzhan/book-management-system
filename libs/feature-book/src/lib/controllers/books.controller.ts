import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { BooksService } from '../services/books.service';
import { ObjectId } from 'mongodb';

@Controller('book')
export class BooksController {
  constructor(private service: BooksService) {}

  @Post()
  create(@Body() createBookDTO: CreateBookDTO) {
    return this.service.create(createBookDTO);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getBook(@Param('id') id: ObjectId) {
    return this.service.find(id);
  }
}
