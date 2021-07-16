import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ErrorPageComponent } from './Utils/error-page/error-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
 {
   path:"login",
   component:LoginComponent,

 },
 {
   path:"home",
   component:HomeComponent
 },
 {
   path:"**",
   component:ErrorPageComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
