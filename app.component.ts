import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>ThemeParkPlanner</h1>
    <app-park-selection></app-park-selection>
    <app-weather-preferences></app-weather-preferences>
    <app-planner></app-planner>
    <app-schedule></app-schedule>
  `
})
export class AppComponent { }
