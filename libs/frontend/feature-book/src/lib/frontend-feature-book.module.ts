import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from './containers/create-book/create-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { RoutingModule } from './routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBooksComponent } from './containers/list-books/list-books.component';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RoutingModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    RoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CreateBookComponent,
    BookFormComponent,
    ListBooksComponent,
    BookDialogComponent,
  ],
})
export class FrontendFeatureBookModule {}
