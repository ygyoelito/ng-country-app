import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams()
      .set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCode(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }
}
