import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NexAppComponent } from './nex-app/nex-app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animaciones de PrimeNG
import { InputTextModule } from 'primeng/inputtext'; // Módulo de entrada de texto de PrimeNG
import { ButtonModule } from 'primeng/button'; // Módulo de botón de PrimeNG
import { ToastModule } from 'primeng/toast'; // Módulo de Toast de PrimeNG
import { CardModule } from 'primeng/card'; // Módulo de Card de PrimeNG
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component'; // Módulo de formularios de Angular
import { TableModule } from 'primeng/table'; // Módulo de tabla de PrimeNG
import { PanelModule } from 'primeng/panel';
import { EventosComponent } from './eventos/eventos.component'; // Módulo de panel de PrimeNG



@NgModule({
  declarations: [
    AppComponent,
    NexAppComponent,
    LoginComponent,
    UsersComponent,
    EventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // Necesario para PrimeNG
    InputTextModule, // Para campos de entrada de texto
    ButtonModule, // Para botones
    ToastModule, // Para notificaciones
    CardModule, // Para el componente de tarjeta
    FormsModule, // Para ngModel
    TableModule, // Para tablas
    PanelModule, // Para paneles
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
