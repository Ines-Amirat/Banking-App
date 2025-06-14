import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
   {path :'login', component: LoginComponent },
   {path :'register', component: SignupComponent },
   {path :'home', component: HomeComponent },
   {path:'', redirectTo :'home' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

