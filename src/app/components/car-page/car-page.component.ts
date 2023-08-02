import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars/cars.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent {

  @Input() resetLinkText: string = "Other cars";
  @Input() resetLinkRoute: string = "/";

  car!: Car;
  constructor(private activatedRoute: ActivatedRoute,
    private CarsService: CarsService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.car = CarsService.getCarById(params.id);
    })
  }

}
