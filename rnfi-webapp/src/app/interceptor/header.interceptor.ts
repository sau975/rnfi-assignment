import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        "Authkey": "test-angular-2021"
      })
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
  }
}
