import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  startValue: number = 10000;
  endValue: number = 5000000;
  step: number = 1000;
  yearStartValue: number = 2000;
  currentYear: number = new Date().getFullYear();
  yearEndValue: number = this.currentYear;
  yearStep: number = 1;
  mileageStartValue: number = 0;
  mileageEndValue: number = 50000;
  mileageStep: number = 1000;
  constructor() {}
  ngOnInit(): void {}
}
