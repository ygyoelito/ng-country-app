import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interfaces';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.hasError = false;
    this.term = term;

    this.countryService.searchByCapital(term).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        this.hasError = true;
        this.countries = [];
      },
    });
  }

  closeWarn() {
    this.hasError = false;
    this.term = '';
  }
}
