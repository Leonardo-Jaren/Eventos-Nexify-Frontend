import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NexAppComponent } from './nex-app/nex-app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'nex-app', component: NexAppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UsersComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Redirección al cargar la aplicación
  { path: '**', redirectTo: 'auth/login' } // Redirección en caso de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
