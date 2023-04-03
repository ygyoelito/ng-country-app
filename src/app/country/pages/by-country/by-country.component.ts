import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  countriesSuggestions: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.hasError = false;
    this.term = term;
    this.showSuggestions = false;

    this.countryService.searchByCountry(term).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {
        this.hasError = true;
        this.countries = [];
      },
    });
  }

  suggestions(term: string) {
    this.hasError = false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchByCountry(term).subscribe({
      next: (countries) => {
        this.countriesSuggestions = countries.splice(0, 5);
      },
      error: (err) => {
        //this.hasError = true;
        this.countriesSuggestions = [];
      },
    });
  }

  searchSuggestions(term: string) {
    this.search(term);    
  }

  closeWarn() {
    this.hasError = false;
    this.term = '';
  }
}
