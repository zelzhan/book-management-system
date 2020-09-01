import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './containers/create-book/create-book.component';
import { BookService } from './services/book.service';

const routes: Routes = [{ path: 'create', component: CreateBookComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [BookService],
  exports: [RouterModule],
})
export class RoutingModule {}
