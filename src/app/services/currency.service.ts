import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private API: string = 'https://openexchangerates.org/api/latest.json?app_id=e326483f24b94e8f97b73ab5a0c4503c';

  constructor(private http: HttpClient) {
    this.getCurrency();
  }

  getCurrency(): Observable<any> {
    return this.http.get(this.API);
  }
}
