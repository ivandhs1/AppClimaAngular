import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  constructor(public httpC: HttpClient) { }

  getTraduction(palabra:string){
    let URL: string = `https://translation.googleapis.com/language/translate/v2`;
    return this.httpC.get<any>(URL);

  }

}
