import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  API_KEY = '9812b8d4e5714d0cabc04348230904'
  URL = 'https://api.weatherapi.com/v1/current.json?key='

  constructor(public httpC: HttpClient) { }

  getCountry(country: String){
    let url = `${this.URL}${this.API_KEY}&q=${country}&aqi=no`
    return this.httpC.get(url);

  }

}
