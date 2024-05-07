import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  cookieValue: string | undefined;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })

    this.cookieValue = this.cookieService.get('userLoggedIn');
  }

  login(): void{

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(loginOk => {
      if (loginOk) {
        alert("Login Sucess")
        this.loginForm.reset();
        this.router.navigate(['fruit/home'])
        this.cookieService.set('userLoggedIn', 'true');
        this.cookieValue = this.cookieService.get('userLoggedIn');
      } else {
        alert("user not found");
      }
    })
  }


}
