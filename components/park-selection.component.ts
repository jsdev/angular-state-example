import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPark } from '../store/planner.actions';

@Component({
  selector: 'app-park-selection',
  template: `
    <h2>Select Theme Park</h2>
    <select (change)="onParkSelect($event)">
      <option value="magic-kingdom">Magic Kingdom</option>
      <option value="epcot">Epcot</option>
      <option value="hollywood-studios">Hollywood Studios</option>
      <option value="animal-kingdom">Animal Kingdom</option>
    </select>
  `
})
export class ParkSelectionComponent {
  constructor(private store: Store) {}

  onParkSelect(event: Event) {
    const park = (event.target as HTMLSelectElement).value;
    this.store.dispatch(selectPark({ park }));
  }
}
