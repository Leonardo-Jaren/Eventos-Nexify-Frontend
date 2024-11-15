import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private tokenKey = 'token';
  private ApiUrl = "http://127.0.0.1:8000/api/"; // URL de la API

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.ApiUrl}login/`, { username, password })
      .pipe(
        tap(response => {
          this.token = response.token;
          localStorage.setItem('token', response.token);
        })
      );
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem(this.tokenKey);

    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  getUserRole(): string {
    return 'user';
  }
}
