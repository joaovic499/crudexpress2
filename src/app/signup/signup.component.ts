import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }

  signUp(): void {
    this.http.post<any>("http://localhost:3001/signupUsers", this.signupForm.value).pipe(
      tap(() => {
        alert("Signup successful");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }),
      catchError(() => {
        alert("Something went wrong");
        return of(null); // Retorna um observable vazio para evitar erros não tratados
      })
    ).subscribe();
  }
}
