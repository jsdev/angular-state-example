import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSchedule, selectSelectedPark, selectOptimalDates } from '../store/planner.selectors';
import { generateSchedule } from '../store/planner.actions';

@Component({
  selector: 'app-schedule',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Your Schedule</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <button mat-raised-button color="primary" (click)="onGenerateSchedule()" 
                [disabled]="!(selectedPark$ | async) || (optimalDates$ | async)?.length === 0">
          Generate Schedule
        </button>
        <mat-list *ngIf="schedule$ | async as schedule">
          <ng-container *ngFor="let day of schedule">
            <h3 mat-subheader>{{ day.date | date:'mediumDate' }}</h3>
            <mat-list-item *ngFor="let attraction of day.attractions">
              {{ attraction.name }} - Wait time: {{ attraction.waitTime }} minutes
            </mat-list-item>
            <mat-divider></mat-divider>
          </ng-container>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `
})
export class ScheduleComponent implements OnInit {
  schedule$: Observable<any>;
  selectedPark$: Observable<string>;
  optimalDates$: Observable<Date[]>;

  constructor(private store: Store) {
    this.schedule$ = this.store.select(selectSchedule);
    this.selectedPark$ = this.store.select(selectSelectedPark);
    this.optimalDates$ = this.store.select(selectOptimalDates);
  }

  ngOnInit() {}

  onGenerateSchedule() {
    this.store.dispatch(generateSchedule());
  }
}
