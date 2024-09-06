import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>ThemeParkPlanner</span>
    </mat-toolbar>
    <div class="content">
      <app-park-selection></app-park-selection>
      <app-weather-preferences></app-weather-preferences>
      <app-planner></app-planner>
      <app-schedule></app-schedule>
    </div>
  `,
  styles: [`
    .content {
      padding: 20px;
    }
  `]
})
export class AppComponent { }
