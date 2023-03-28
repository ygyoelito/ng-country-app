import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDatailsComponent } from './pages/country-datails/country-datails.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDatailsComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDatailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
