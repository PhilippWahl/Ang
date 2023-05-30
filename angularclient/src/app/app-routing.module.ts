import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {StandartUserComponent} from "./standart-user/standart-user.component";
import {CarListComponent} from "./car-list/car-list.component";

const routes: Routes = [
  { path: 'modify-car/:id', component:StandartUserComponent},
  { path: 'cars', component: CarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
