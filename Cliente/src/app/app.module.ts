import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DialogModule } from 'primeng/dialog'; // Módulo de diálogo de PrimeNG
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HomeComponent } from './home/home.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SubscripcionesComponent } from './subscripciones/subscripciones.component';
import { NavigationComponent } from './navigation/navigation.component'; // Módulo de diálogo de confirmación de PrimeNG
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModEventComponent } from './modal-mod-event/modal-mod-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { RegisterComponent } from './register/register.component'; // Importa FullCalendar
import { ConfirmationService } from 'primeng/api';
import { ModalComponent } from './modal/modal.component';  // Importar el servicio de confirmación
// Removed duplicate and incorrect import
//import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    EventosComponent,
    HomeComponent,
    CalendarioComponent,
    SubscripcionesComponent,
    NavigationComponent,
    ModalModEventComponent,
    CreateEventComponent,
    RegisterComponent,
    ModalComponent,
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
    DialogModule, // Para diálogos
    ConfirmDialogModule, // Para diálogos de confirmación
    FullCalendarModule, // Para FullCalendar
    //MatDialogModule, // Para diálogos de Angular Material
    
  ],
  providers: [
    ConfirmationService, // Provee el servicio de confirm
    provideClientHydration(),
    provideHttpClient(withFetch()), // Configura el cliente HTTP con fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
