import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FeatureAuthorModule } from '@book-management-system/feature-author';
import { FeatureBookModule } from '@book-management-system/feature-book';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    FeatureAuthorModule,
    FeatureBookModule,
    MDBBootstrapModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
