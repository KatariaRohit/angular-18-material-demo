import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormField,
    MatLabel,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatFormField,
    MatLabel,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
  ],
})
export class MaterialModule {}
