import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let request = req;
        const token = this.auth.loadToken();
        const apiKey = '2eb09af6a6beb25b88ab8786f911c1832ccf52b6';

        if (token) {
            request = req.clone(
                {
                    setHeaders: {
                        Authorization: `Token ${token}`,
                        'X-API-KEY': apiKey
                    }
                }
            )
        }
        return next.handle(request);
    }
}