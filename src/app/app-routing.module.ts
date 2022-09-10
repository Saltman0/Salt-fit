import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'notebook',
    loadChildren: () => import('./page/notebook/notebook.module').then( m => m.NotebookPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./page/exercises/exercises.module').then( m => m.ExercisesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
