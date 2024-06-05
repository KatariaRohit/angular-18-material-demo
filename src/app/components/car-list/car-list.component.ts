import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CarDetailsCardComponent } from './car-details-card/car-details-card.component';
import { cars } from '../../data/cars.json';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FiltersComponent, CarDetailsCardComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  cars: any = cars;
  constructor() {}

  ngOnInit(): void {}
}
