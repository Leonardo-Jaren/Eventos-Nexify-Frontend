import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private token = new BehaviorSubject<string | null>(null);
    private ApiUrl = "http://127.0.0.1:8000/api/";
    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

    login(username:string, password:string) {
        const headers = {'X-API-KEY': '2eb09af6a6beb25b88ab8786f911c1832ccf52b6'};
        this.http.post<{token: string}>(this.ApiUrl
            + 'token-auth/', {username, password}, {headers}).subscribe(resp => {
                this.token.next(resp.token);
                console.log(resp.token);
                localStorage.setItem('token', resp.token);
            })
    }
    logout() {
    }
    getToken() {
        return this.token.value;
    }
     

}