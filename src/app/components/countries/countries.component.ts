import { Component, computed, inject, signal } from '@angular/core';
import { Country } from '../../country.model';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from "../card/card.component";
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-countries',
  imports: [CardComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {

  private http = inject(HttpClient);
  private countriesService = inject(CountriesService)
  countries = signal<Country[]>([]);




  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(data => {
      this.countries.set(data);
    });
  }



  searchQuery = signal('');
  selectedRegion = signal('');

  filteredCountries = computed(() => {
    const search = this.searchQuery().toLowerCase();
    const region = this.selectedRegion();

    return this.countries().filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(search);
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });
  });

}
