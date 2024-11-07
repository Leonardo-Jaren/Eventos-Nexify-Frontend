import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from '../service/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withFetch())  // Configura HttpClient para usar fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
