import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'connexion', loadChildren: './connexion/connexion.module#ConnexionPageModule' },
  { path: 'list', loadChildren: './hikings/hikings.module#HikingsModule' },
  { path: 'detail/:id', loadChildren: './hikings/detail/detail.module#DetailPageModule' },
  { path: 'start/:id', loadChildren: './hikings/start/start.module#StartPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
