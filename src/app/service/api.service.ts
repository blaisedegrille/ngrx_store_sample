import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Message } from '../model/message.model';
import { User } from '../model/user.model';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient, private store: StoreService) {}

  getUserData(id: number): Observable<User> {
    const serviceUrl = `https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.http.get<User>(serviceUrl).pipe(
      tap((user) => this.store.setUserData(user)),
      catchError(this.handleError)
    );
  }

  getMessageData(): Observable<Message[]> {
    const serviceUrl = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get<Message[]>(serviceUrl).pipe(
      tap((messages) => this.store.setMessageData(messages)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
