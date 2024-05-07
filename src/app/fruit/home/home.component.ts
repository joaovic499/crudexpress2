import { AuthService } from './../../auth.service';
import { Fruit } from '../fruit';
import { FruitService } from './../fruit.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  allfruits: Fruit[] = [];
  cookieService: any;
  constructor(private fruitService: FruitService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    if (!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    } else {
    this.fruitService.getAll().subscribe((data) => {
      this.allfruits = data;

    });
  }

  }

  deleteItem(id:number): void {
    this.fruitService.delete(id).subscribe({
      next: (data) => {
        this.allfruits = this.allfruits.filter(_ => _.id != id)
      },
    })
  }



}
