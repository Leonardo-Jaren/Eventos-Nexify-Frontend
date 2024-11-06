import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = new BehaviorSubject<string | null>(null);
  private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  login(username: string, password: string) {
    const headers = { 'API-KEY': '1cf535c7f0f585ab0e4a29419d62c048296a4cd1' };
    this.http.post<{token: string}>(this.ApiUrl + 'login/', {username, password}, {headers})
      .subscribe(response => {
        
        // Guardar el token en el BehaviorSubject y localStorage
        this.token.next(response.token);
        localStorage.setItem('token', response.token);

        // Guardar el token en el BehaviorSubject y localStorage
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/eventos';
        this.router.navigateByUrl(returnUrl);
      }, error => {
        console.error('Error login', error);
      });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    window.location.reload();
  }

  getToken() {
    return this.token.value;
  }

  isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      // Usa localStorage aquí
      return !!localStorage.getItem('token');
    }
    return false;
  }
  
  loadToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token.next(token);
    }
  }
}