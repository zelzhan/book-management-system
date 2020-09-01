import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAuthorComponent } from './containers/create-author/create-author.component';
import { AuthorService } from './services/author.service';

const routes: Routes = [{ path: 'create', component: CreateAuthorComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthorService],
  exports: [RouterModule],
})
export class RoutingModule {}
