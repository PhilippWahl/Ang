import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "./Car/car";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private carUrl: string;

  constructor(private http:HttpClient) {
    this.carUrl='http://localhost:8080/cars';
  }

  public findAll(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl);
  }

  public save(car: Car) {
    return this.http.post<Car>(this.carUrl, car)
  }
}
