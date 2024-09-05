import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface WeatherData {
  date: Date;
  temperature: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cache: Map<string, WeatherData[]> = new Map();

  constructor(private http: HttpClient) {}

  getWeatherForecast(zipCode: string, startDate: Date, endDate: Date): Observable<WeatherData[]> {
    const cacheKey = `${zipCode}-${startDate.toISOString()}-${endDate.toISOString()}`;
    
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey)!);
    }

    // Normally the key would be stored in environment variable, but I want to publish to github pages
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=fd84dbfc0d4246a2873162733240509&q=${zipCode}&days=7`;

    return this.http.get<any>(apiUrl).pipe(
      map(response => {
        const weatherData = this.parseWeatherData(response, startDate, endDate);
        this.cache.set(cacheKey, weatherData);
        return weatherData;
      }),
      catchError(error => {
        console.error('Error fetching weather data', error);
        return of([]);
      })
    );
  }

  private parseWeatherData(response: any, startDate: Date, endDate: Date): WeatherData[] {
    return response.forecast.forecastday.map((day: any) => ({
      date: new Date(day.date),
      temperature: day.day.avgtemp_c,
      description: day.day.condition.text
    })).filter((data: WeatherData) => 
      data.date >= startDate && data.date <= endDate
    );
  }
}
