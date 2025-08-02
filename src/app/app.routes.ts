import { Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    { path: '', component: CountriesComponent },
  { path: 'details/:name', component: DetailsComponent  },
    { path: '**', redirectTo: '' }

];
