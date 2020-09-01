import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAuthorComponent } from './containers/create-author/create-author.component';
import { RoutingModule } from './routing.module';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
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
  ],
  declarations: [CreateAuthorComponent, AuthorFormComponent],
})
export class FrontendFeatureAuthorModule {}
