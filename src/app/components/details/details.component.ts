import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Country, Currency, Language } from '../../country.model';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  allCountries: Country[] = [];

  country = signal<Country | null>(null)

  constructor(private router: Router) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const name = params.get('name');

    this.http.get<Country[]>('assets/data.json').subscribe(data => {
      this.allCountries = data;
      const found = data.find(c => c.name === name);
      this.country.set(found ?? null);
    });
  });
}



  goBack() {
    this.router.navigate(['/']);
  }


  formatCurrencies(currencies: Currency[]): string {
    if (!currencies) return '';
    return currencies.map(cur => `${cur.name} (${cur.symbol})`).join(', ');
  }

  formatLanguages(languages: Language[]): string {
    if (!languages) return '';
    return languages.map(lang => lang.name).join(', ');
  }
  get borderCountries(): Country[] {
    const codes = this.country()?.borders ?? [];


    return this.allCountries.filter(c => codes.includes(c.alpha3Code));
  }

}
