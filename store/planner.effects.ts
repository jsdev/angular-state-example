import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { WeatherService } from '../services/weather.service';
import { PlannerService } from '../services/planner.service';
import * as PlannerActions from './planner.actions';
import { selectDateRange, selectSelectedPark, selectOptimalDates } from './planner.selectors';

@Injectable()
export class PlannerEffects {
  fetchWeatherForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlannerActions.fetchWeatherForecast),
      withLatestFrom(this.store.select(selectDateRange)),
      mergeMap(([{ zipCode }, dateRange]) =>
        this.weatherService.getWeatherForecast(zipCode, dateRange.startDate, dateRange.endDate).pipe(
          map(forecast => PlannerActions.fetchWeatherForecastSuccess({ forecast })),
          catchError(error => of(PlannerActions.fetchWeatherForecastFailure({ error: error.message })))
        )
      )
    )
  );

  generateSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlannerActions.generateSchedule),
      withLatestFrom(
        this.store.select(selectSelectedPark),
        this.store.select(selectOptimalDates)
      ),
      mergeMap(([_, selectedPark, optimalDates]) =>
        this.plannerService.generateSchedule(selectedPark, optimalDates).pipe(
          map(schedule => PlannerActions.generateScheduleSuccess({ schedule })),
          catchError(error => of(PlannerActions.fetchWeatherForecastFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private weatherService: WeatherService,
    private plannerService: PlannerService
  ) {}
}
