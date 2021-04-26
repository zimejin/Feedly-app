import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalRequestHttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set headers for new request
    if (request) request = this.addHeaderProperties(request);

    // Then handle error
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          switch (error.status) {
            // When session expires
            case 401:
              this.doSessionExpiration();
              break;
          }
          // server-side error
          errorMessage = `Error ${error.status}\nMessage: ${error.message}`;
        }
        //  window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  // Add the token to the payload and properties to the header
  private addHeaderProperties(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        ClientID: 'Feedly',
        Secret: '',
        Authorization: '',
      },
    }) as HttpRequest<any>;
  }

  async doSessionExpiration(): Promise<void> {
    alert('Session Timed Out');
  }
}
