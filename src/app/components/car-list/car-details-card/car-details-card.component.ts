import { Component, HostListener, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-car-details-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './car-details-card.component.html',
  styleUrl: './car-details-card.component.scss',
})
export class CarDetailsCardComponent {
  @Input() data: any;
}
