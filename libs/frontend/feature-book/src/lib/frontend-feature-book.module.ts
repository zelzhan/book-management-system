import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './containers/create-book/create-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { RoutingModule } from './routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    MatAutocompleteModule,
    MatCardModule,
    MatAutocompleteModule,

    MatFormFieldModule,
    MatButtonModule,
    RoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateBookComponent, BookFormComponent],
})
export class FrontendFeatureBookModule {}
