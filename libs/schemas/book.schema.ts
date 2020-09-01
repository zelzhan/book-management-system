import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, PromiseProvider } from 'mongoose';
import { Author } from './author.schema';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  isbn: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Author, required: true })
  author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);
