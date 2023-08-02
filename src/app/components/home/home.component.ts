import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars/cars.service';
import { Car } from 'src/app/shared/models/Car';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[] = [];
  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.cars = this.carsService.getAll().filter(car => car.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else
        this.cars = this.carsService.getAll();
    })

  }

}
