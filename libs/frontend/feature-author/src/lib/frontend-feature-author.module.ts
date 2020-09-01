import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAuthorComponent } from './containers/create-author/create-author.component';
import { RoutingModule } from './routing.module';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RoutingModule, ReactiveFormsModule],
  declarations: [CreateAuthorComponent, AuthorFormComponent],
})
export class FrontendFeatureAuthorModule {}
