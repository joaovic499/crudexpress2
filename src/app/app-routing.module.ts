import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruit/home/home.component';

const routes: Routes = [
  {path: 'fruit/index', component: HomeComponent},
  {path: 'fruit', redirectTo:'fruit', pathMatch: 'full'},
  {path: '', redirectTo:'fruit', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
