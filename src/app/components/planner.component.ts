import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchWeatherForecast, setDateRange } from '../store/planner.actions';
import { selectOptimalDates, selectIsLoading } from '../store/planner.selectors';

@Component({
  selector: 'app-planner',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Plan Your Visit</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form (ngSubmit)="onSubmit()">
          <mat-form-field>
            <mat-label>Zip Code</mat-label>
            <input matInput [(ngModel)]="zipCode" name="zipCode" required>
          </mat-form-field>
          <mat-form-field>
            <mat-label>Start Date</mat-label>
            <input matInput [matDatepicker]="startPicker" [(ngModel)]="startDate" name="startDate" required>
            <mat-datepicker-toggle matSuffix [for]="startPicker"></mat-datepicker-toggle>
            <mat-datepicker #startPicker></mat-datepicker>
          </mat-form-field>
          <mat-form-field>
            <mat-label>End Date</mat-label>
            <input matInput [matDatepicker]="endPicker" [(ngModel)]="endDate" name="endDate" required>
            <mat-datepicker-toggle matSuffix [for]="endPicker"></mat-datepicker-toggle>
            <mat-datepicker #endPicker></mat-datepicker>
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit" [disabled]="isLoading$ | async">
            Get Optimal Dates
          </button>
        </form>
        <mat-spinner *ngIf="isLoading$ | async"></mat-spinner>
        <mat-list *ngIf="optimalDates$ | async as optimalDates">
          <h3 mat-subheader>Optimal Dates for Your Visit:</h3>
          <mat-list-item *ngFor="let date of optimalDates">
            {{date | date:'mediumDate'}}
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `
})
export class PlannerComponent implements OnInit {
  zipCode: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  optimalDates$: Observable<Date[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.optimalDates$ = this.store.select(selectOptimalDates);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit() {
    // Set default date range to upcoming week
    this.endDate = new Date(this.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.store.dispatch(setDateRange({ startDate: this.startDate, endDate: this.endDate }));
  }

  onSubmit() {
    this.store.dispatch(setDateRange({ startDate: this.startDate, endDate: this.endDate }));
    this.store.dispatch(fetchWeatherForecast({ zipCode: this.zipCode }));
  }
}
