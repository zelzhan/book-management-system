import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './containers/create-book/create-book.component';
import { BookService } from './services/book.service';
import { ListBooksComponent } from './containers/list-books/list-books.component';

const routes: Routes = [
  { path: 'create', component: CreateBookComponent },
  { path: 'list', component: ListBooksComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [BookService],
  exports: [RouterModule],
})
export class RoutingModule {}
