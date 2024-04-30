import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits');
  }

  create(data: Fruit) {
    return this.httpClient.post('http://localhost:3000/fruits', data)

  }
}
