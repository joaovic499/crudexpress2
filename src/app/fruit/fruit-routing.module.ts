import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: 'fruit/home', component:HomeComponent},
  {path: 'fruit', redirectTo:'fruit/home', pathMatch: 'full'},
  {path: '', redirectTo:'fruit/home', pathMatch: 'full'},
  {path: 'fruit/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitRoutingModule { }
