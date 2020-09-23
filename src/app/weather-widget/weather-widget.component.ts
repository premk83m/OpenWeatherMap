import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  city: string;
  params: HttpParams;
  weatherObj: any = {};
  citie: any = {};
  cities: any[] = [{cityname: 'city1', details: [], search: false }, {cityname: 'city2', details: []}, {cityname: 'city3', details: []},
  {cityname: 'city4', details: []}, {cityname: 'city5', details: []}, {cityname: 'city6', details: []}, {cityname: 'city7', details: []},
  {cityname: 'city8', details: []}];
  isEdit: boolean;
  isDisabled: boolean;
  error: string;

  constructor(private weatherservice: WeatherService) { }

  ngOnInit(): void {
    this.isEdit = true;
    this.isDisabled = false;
  }

  getweatherCity(city: string, selcity: any){
   if ( city !== ''){
    this.isEdit = true;
    this.weatherservice.getWeatherDataByCityName(city)
    .subscribe((data) => {
      this.weatherObj = data;
      selcity.cityname = data['name'];
      selcity.details.push(data);
      selcity.search = false;
      this.isEdit = false;
      this.isDisabled = true;
      console.log(data);
      console.log(selcity.cityname);
      // console.log(selcity.weatherObj.name);
      // console.log(selcity.wind.deg);
    });
  }else{
    this.error = 'Please enter the city';
  }
  }
  getweatherCitysearch(selcity: any){
    selcity.search = true;
    selcity.isDisabled = true;
  }
  getweatherCityEdit(selcity: any){
    selcity.search = true;
    selcity.details = [];
  }

}
