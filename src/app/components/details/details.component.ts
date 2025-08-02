import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Country, Currency, Language } from '../../country.model';
import { isPlatformBrowser } from '@angular/common';
import { CountriesService } from '../../countries.service';

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
  constructor(
    private router: Router,
    private countriesService: CountriesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  ngOnInit() {
    this.countriesService.getCountries().subscribe(data => {
      this.allCountries = data;

      this.route.paramMap.subscribe(params => {
        const name = decodeURIComponent(params.get('name') ?? '');
        const found = this.countriesService.getCountryByName(name);


        found.subscribe(country => this.country.set(country ?? null));


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
