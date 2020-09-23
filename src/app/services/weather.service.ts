import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  apiKey = 'a1cd045afdfcb016fa82d89e09bea7a0';

  constructor(private http: HttpClient) { }

  getWeatherDataByCityName(city: string){
    const params = new HttpParams()
    .set('q', city)
    .set('appid', this.apiKey);
    return this.http.get(this.apiUrl, { params });
  }
}
