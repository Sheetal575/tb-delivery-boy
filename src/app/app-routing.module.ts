import { VerificationComponent } from './Components/login/verification/verification.component';
import { LoginBoxComponent } from './Components/login-box/login-box.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ErrorPageComponent } from './Utils/error-page/error-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "user-login",
    pathMatch: "full",
  },
 {
   path:"user-login",
   component:LoginBoxComponent,
   children:[
     {
       path:"",
       component:LoginComponent,
     },
     {
       path:"user-verification",
       component:VerificationComponent,
     }
   ]

 },
 {
   path:"user-dashboard",
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
