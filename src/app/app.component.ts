import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CountriesComponent } from "./components/countries/countries.component";
import { DetailsComponent } from "./components/details/details.component";
import { SplashComponent } from "./splash/splash.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CountriesComponent, DetailsComponent, RouterOutlet, SplashComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.splash.set(false)
    }, 2000);
  }
  title = 'countriesProject ';
  splash = signal<boolean>(true)




}
