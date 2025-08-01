import { Component, input } from '@angular/core';
import { Country } from '../../country.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterModule , CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  details = input<Country | null>(null)
}
