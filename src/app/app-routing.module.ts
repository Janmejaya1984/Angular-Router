import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { LoginGuardService } from './login-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'register', component:RegistrationFormComponent },
    { path: 'books', component:BookComponent,canActivate:[LoginGuardService] },
    { path: 'detail/:id', component:BookdetailComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
