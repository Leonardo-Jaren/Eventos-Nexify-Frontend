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
        const apiKey = 'fe1147108cf466dc2085a0cf14757bc1a4974a11';

        if (token) {
            request = req.clone({
                setHeaders: {
                    Authorization: `Token ${token}`,
                    'X-API-KEY': apiKey
                }
            });
        }
        return next.handle(request);
    }
}