import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setWeatherPreferences } from '../store/planner.actions';

@Component({
  selector: 'app-weather-preferences',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Weather Preferences</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form (ngSubmit)="onSubmit()">
          <mat-form-field>
            <mat-label>Minimum Temperature</mat-label>
            <input matInput type="number" [(ngModel)]="minTemp" name="minTemp">
          </mat-form-field>
          <mat-form-field>
            <mat-label>Maximum Temperature</mat-label>
            <input matInput type="number" [(ngModel)]="maxTemp" name="maxTemp">
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit">Set Preferences</button>
        </form>
      </mat-card-content>
    </mat-card>
  `
})
export class WeatherPreferencesComponent {
  minTemp: number = 20;
  maxTemp: number = 28;

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(setWeatherPreferences({ minTemp: this.minTemp, maxTemp: this.maxTemp }));
  }
}
