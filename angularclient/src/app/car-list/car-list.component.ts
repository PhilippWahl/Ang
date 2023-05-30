import { Component, OnInit } from '@angular/core';
import {Car} from "../Car/car";
import {CarServiceService} from "../car-service.service";
import {Felgen} from "../Felgen/felgen";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] |undefined;

  constructor(private carService: CarServiceService) { }

  ngOnInit(): void {
    this.carService.findAll().subscribe(data =>{
      this.cars=data;
    })
  }

}
