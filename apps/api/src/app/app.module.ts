import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FeatureAuthorModule } from '@book-management-system/feature-author';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    FeatureAuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
