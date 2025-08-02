import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Country } from "./country.model";

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/data.json');
  }

  getCountryByName(name: string): Observable<Country | undefined> {
    return this.getCountries().pipe(
      map(countries =>
        countries.find(
          c => decodeURIComponent(c.name.toLowerCase()) === decodeURIComponent(name.toLowerCase())
        )
      )
    );
  }
}
