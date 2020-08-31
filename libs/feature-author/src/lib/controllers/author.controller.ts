import { Controller, Post, Body } from '@nestjs/common';
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { AuthorsService } from '../services/author.service';

@Controller('author')
export class AuthorsController {
  constructor(private service: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDTO: CreateAuthorDTO) {
    return this.service.create(createAuthorDTO);
  }
}
