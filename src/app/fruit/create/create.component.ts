import { Router } from '@angular/router';
import { FruitService } from './../fruit.service';
import { Component } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(private fruitService: FruitService, private router: Router) { }
  formdata : Fruit = {
    id: 0,
    name: "",
    quantity: 0,
    price: 0
  }

  create() {
    this.fruitService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["/fruit/home"]);
    },
    error: (er) => {
      console.log(er)
    }
  });
}
}
