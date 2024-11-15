import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;
        const token = this.authService.getToken();
        const apiKey = '1cf535c7f0f585ab0e4a29419d62c048296a4cd1';

        if (token) {
            request = req.clone({
                setHeaders: {
                    Authorization: `Token ${token}`,
                    'API-KEY': apiKey
                }
            });
        }
        return next.handle(request);
    }
}