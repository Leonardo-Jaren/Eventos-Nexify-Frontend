import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../service/guard';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'calendario', component: CalendarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { path: 'crear-evento', component: EventosComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Redirección al cargar la aplicación
  { path: '**', redirectTo: 'auth/login' } // Redirección en caso de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
