import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'author',
    loadChildren: () =>
      import('@book-management-system/frontend/feature-author').then(
        (mod) => mod.FrontendFeatureAuthorModule
      ),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('@book-management-system/frontend/feature-book').then(
        (mod) => mod.FrontendFeatureBookModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
