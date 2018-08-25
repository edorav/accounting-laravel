import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { config } from './../../../environments/environment';
import { AuthService } from './auth.service';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

export abstract class MyHttpClientService<T> {
  private absolutePath = config.serverUrl;

  constructor(
    public http: HttpClient,
    public authService: AuthService,
    public router: Router
  ) { }

  public abstract getEndPoint();

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
  }

  public getEndPointUri(): string {
    return this.absolutePath + this.getEndPoint() + '/';
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      this.router.navigate(['network-error']);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public get() {
    const url = this.absolutePath + this.getEndPoint();
    return this.http.get(url, this.getHttpOptions())
      .pipe(
        tap( // Log the result or error
          data => data,
          error => error
        )
      );
  }

  public findById(id: string) {
    const url = this.absolutePath + this.getEndPoint();
    return this.http.get(url + '/' + id, this.getHttpOptions())
      .pipe(
        tap( // Log the result or error
          data => data,
          error => error
        )
      );
  }

  public findByParentId(id: string) {
    const url = this.absolutePath + this.getEndPoint();
    return this.http.get(url + '/parent/' + id, this.getHttpOptions())
      .pipe(
        tap( // Log the result or error
          data => data,
          error => error
        )
      );
  }

  public save(model: T, id?: string) {
    let url = this.absolutePath + this.getEndPoint();
    if (id) {
      url = url + '/' + id;
    }
    return this.http.post(url, model, this.getHttpOptions())
      .pipe(
        tap( // Log the result or error
          data => data,
          error => error
        )
      );
  }

  public delete(id: string) {
    const url = this.absolutePath + this.getEndPoint() + '/' + id;

    return this.http.delete(url, this.getHttpOptions())
      .pipe(
        tap( // Log the result or error
          data => data,
          error => error
        )
      );
  }


}
