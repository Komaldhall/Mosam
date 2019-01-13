import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  get(loc){
    let weather = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=5581ade3ed40359bbc8dd4aed910fa42`);
    return weather;
  }

}

