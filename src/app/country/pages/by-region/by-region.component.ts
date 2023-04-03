import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    if (region === this.activeRegion) { return; }
    
    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchByRegion(region).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (err) => {      
        this.countries = [];
      },
    });
  }

  getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
