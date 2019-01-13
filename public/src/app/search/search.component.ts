import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loc='';
  humidity = 0;
  avg_temp = 0;
  high_temp = 0;
  low_temp = 0;
  status ='';
  wind = 0;
  pressure = 0;
  display=0;
  msg="";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.loc='';
    this.humidity = 0;
    this.avg_temp = 0;
    this.high_temp = 0;
    this.low_temp = 0;
    this.status ='';
    this.wind = 0;
    this.pressure = 0;
    this.display=2;
    this.msg="City Not Found! Please enter correct City.";
  }

  check(){
    if(this.loc.length>0){
      this.display=0;
      let weather = this._http.get(this.loc);
      weather.subscribe((data:any)=>{
      console.log(data);
      if(!data.error){
        this.humidity = data.main.humidity;
        this.avg_temp = data.main.temp - 273.15;
        this.high_temp = data.main.temp_max - 273.15;
        this.low_temp = data.main.temp_min - 273.15;
        this.status = data.weather[0].description;
        this.wind = data.wind.speed;
        this.pressure = data.main.pressure;
        this.display=1;
      }
      });
    }
  }
}
