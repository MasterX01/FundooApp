import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { GetNotesComponent } from './components/get-notes/get-notes.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'notes', pathMatch: 'full'},
      {path: 'notes', component: AllNotesComponent}
    ]
  },
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
