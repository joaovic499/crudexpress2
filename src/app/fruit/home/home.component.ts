import { Fruit } from '../fruit';
import { FruitService } from './../fruit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  allfruits: Fruit[] = [];
  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data) => {
      this.allfruits = data;

    })

  }

}
