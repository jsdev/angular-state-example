import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPark } from '../store/planner.actions';

@Component({
  selector: 'app-park-selection',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Select Theme Park</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field>
          <mat-label>Choose a park</mat-label>
          <mat-select (selectionChange)="onParkSelect($event)">
            <mat-option value="magic-kingdom">Magic Kingdom</mat-option>
            <mat-option value="epcot">Epcot</mat-option>
            <mat-option value="hollywood-studios">Hollywood Studios</mat-option>
            <mat-option value="animal-kingdom">Animal Kingdom</mat-option>
          </mat-select>
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `
})
export class ParkSelectionComponent {
  constructor(private store: Store) {}

  onParkSelect(event: any) {
    this.store.dispatch(selectPark({ park: event.value }));
  }
}
