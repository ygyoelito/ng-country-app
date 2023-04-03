import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-datails',
  templateUrl: './country-datails.component.html',
  styles: [],
})
export class CountryDatailsComponent {
  country!: Country;
  languagesResults: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    /* Option #1
    //countryIdCode in app-routing.module.ts
    this.activatedRoute.params.subscribe(({ countryIdCode }) => {
      // console.log(countryIdCode); get country ID code from url
      this.countryService.searchByCode(countryIdCode).subscribe((country) => {
        console.log(country);
      });
    });*/

    /*Option #2*/
    this.activatedRoute.params
      .pipe(
        switchMap(({ countryIdCode }) =>
          this.countryService.searchByCode(countryIdCode)
        ),
        tap((resp) => {
          console.log(resp);
        })
      )
      .subscribe((country) => {
        this.country = country[0];

        for (const key in this.country.translations) {
          this.languagesResults.push(this.country.translations[key].official);
        }
      });
  }
}
