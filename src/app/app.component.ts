import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { DetailsComponent } from "./components/details/details.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CountriesComponent, DetailsComponent , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'countriesProject';
}
