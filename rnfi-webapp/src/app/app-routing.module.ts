import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountFormComponent } from './components/bank-account-form/bank-account-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { OtpVerificationFormComponent } from './components/otp-verification-form/otp-verification-form.component';
import { LoginService } from './guards/login.service';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'otp-verification', component: OtpVerificationFormComponent},
  {path: 'dashboard', component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {path: 'account-form', component: BankAccountFormComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
