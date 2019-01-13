import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  humidity = 0;
  avg_temp = 0;
  high_temp = 0;
  low_temp = 0;
  status ='';
  image = '';
  wind = 0;
  pressure = 0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    let weather = this._http.get('san jose');
    weather.subscribe((data:any)=>{
      console.log(data);
      this.humidity = data.main.humidity;
      this.avg_temp = data.main.temp - 273.15;
      this.high_temp = data.main.temp_max - 273.15;
      this.low_temp = data.main.temp_min - 273.15;
      this.status = data.weather[0].description;
      this.wind = data.wind.speed;
      this.pressure = data.main.pressure;
      this.image = "https://media.istockphoto.com/videos/downtown-san-jose-street-intersection-with-light-traffic-video-id520187142?s=640x640";
    
    })
  }


}
