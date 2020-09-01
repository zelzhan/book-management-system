import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './containers/create-book/create-book.component';
import { BookService } from './services/book.service';
import { ListBooksComponent } from './containers/list-books/list-books.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  { path: 'create', component: CreateBookComponent, pathMatch: 'full' },
  { path: 'list', component: ListBooksComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes), Ng2SearchPipeModule],
  providers: [BookService],
  exports: [RouterModule],
})
export class RoutingModule {}
