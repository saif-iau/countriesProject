import { Component, computed, inject, signal } from '@angular/core';
import { Country } from '../../country.model';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-countries',
  imports: [CardComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {

  private http = inject(HttpClient);

  countries = signal<Country[]>([]);




  ngOnInit(): void {
    this.http.get<Country[]>('assets/data.json').subscribe(data => {
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
