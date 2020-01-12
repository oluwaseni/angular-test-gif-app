import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', redirectTo: 'container', pathMatch: 'full' },
  {path:'container', component:ContainerComponent},
  {path:'giphy/:id', component:GiphyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
