import { Controller, Post, Body } from '@nestjs/common';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { BooksService } from '../services/books.service';

@Controller('book')
export class BooksController {
  constructor(private service: BooksService) {}

  @Post()
  create(@Body() createBookDTO: CreateBookDTO) {
    return this.service.create(createBookDTO);
  }
}
