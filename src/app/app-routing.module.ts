import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './Pages/home/home.component';
import { SignupComponent } from './Pages/Auth/signup/signup.component';
import { LoginComponent } from './Pages/Auth/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sign-up',
    component:SignupComponent
  },
  {
    path:'sign-in',
    component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
