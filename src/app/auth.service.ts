import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus: boolean = false;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any>('http://localhost:3001/signupUsers').pipe(
      map(response => {
          const user = response.find((u: any) => u.email == email && u.password == password);
          if (user) {
            this.isLoggedInStatus = true;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
          }
          return false;
      })
    );
  }

  logout(): void {
    this.isLoggedInStatus = false;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}
