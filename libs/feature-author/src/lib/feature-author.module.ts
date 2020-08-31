import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from '../../../schemas/author.schema';
import { AuthorsController } from './controllers/author.controller';
import { AuthorsService } from './services/author.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'author', schema: AuthorSchema }]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [],
})
export class FeatureAuthorModule {}
