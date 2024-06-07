import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  @Output() filterValueChanged = new EventEmitter<any>();
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
  filterForm!: FormGroup;
  selectedDisplacement: any = [];
  brandModelSearchText: string = '';
  carBrands: any = ['Avalon', 'Belta', 'bZ3', 'Camry', 'Century'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.filterForm = this.fb.group({
      priceStart: [],
      priceEnd: [],
      yearStart: [],
      yearEnd: [],
      mileageStart: [],
      mileageEnd: [],
      // engineType: [],
      displacement: [],
      // horsepower: [],
    });
  }

  selectDisplacement(checkboxLabel: string, event: any) {
    if (event.target.checked) {
      this.selectedDisplacement.push(checkboxLabel);
    } else {
      const index = this.selectedDisplacement.indexOf(checkboxLabel);
      if (index !== -1) {
        this.selectedDisplacement.splice(index, 1);
      }
    }
    this.updateFilters();
  }

  updateFilters() {
    const filterData = this.filterForm.getRawValue();
    if (this.selectedDisplacement.length) {
      filterData['selectedDisplacement'] = this.selectedDisplacement;
    }
    this.filterValueChanged.emit(filterData);
  }
}
