import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { CarDetailsCardComponent } from './car-details-card/car-details-card.component';
import { cars } from '../../data/cars.json';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FiltersComponent, CarDetailsCardComponent, MaterialModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  cars: any = cars;
  filterValues: any;
  filteredCars: any;
  isLoading: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.filteredCars = this.cars;
  }

  filterChanged(filterValues: any) {
    console.log('filterValues in car list', filterValues);
    this.filterValues = filterValues;
    this.isLoading = true;
    setTimeout(() => {
      this.filteredCars = this.applyFilter(filterValues);
      console.log('FILTERED CARS', this.filteredCars);
    }, 400);
  }

  applyFilter(filter: any) {
    this.isLoading = false;
    return cars.filter((car) => {
      // Parse numeric values from the car object
      const price = parseInt(car.format_price.replace(/,/g, ''), 10);
      const mileage = parseInt(car.format_mileage.replace(/,/g, ''), 10);
      const manufactureYear = car.manufacture_year;
      const displacement = parseInt(
        car.format_displacement.replace(/,/g, ''),
        10
      );

      // Check if the car's properties match the filter criteria
      const matchesPrice =
        filter.priceStart && filter.priceEnd
          ? price >= filter.priceStart && price <= filter.priceEnd
          : true;
      const matchesMileage =
        filter.mileageStart && filter.mileageEnd
          ? mileage >= filter.mileageStart && mileage <= filter.mileageEnd
          : true;
      const matchesYear =
        filter.yearStart && filter.yearEnd
          ? manufactureYear >= filter.yearStart &&
            manufactureYear <= filter.yearEnd
          : true;

      let matchesDisplacement;
      if (filter.selectedDisplacement?.length) {
        matchesDisplacement = filter.selectedDisplacement.some(
          (range: string) => {
            if (range === 'Below 1500') return displacement < 1500;
            if (range === '1500-2500')
              return displacement >= 1500 && displacement <= 2500;
            if (range === '2501-3500')
              return displacement >= 2501 && displacement <= 3500;
            if (range === '3501-4000')
              return displacement >= 3501 && displacement <= 4000;
            if (range === 'Above 4001') return displacement > 4001;
            return false;
          }
        );
      } else {
        matchesDisplacement = true;
      }

      // Return true if all conditions are met
      return (
        matchesPrice && matchesMileage && matchesYear && matchesDisplacement
      );
    });
  }
}
