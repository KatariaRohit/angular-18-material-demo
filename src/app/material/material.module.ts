import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatDivider } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatFormField,
    MatLabel,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatCardModule,
    MatSliderModule,
    MatDivider,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatFormField,
    MatLabel,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatCardModule,
    MatSliderModule,
    MatDivider,
    MatExpansionModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
