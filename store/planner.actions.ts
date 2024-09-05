import { createAction, props } from '@ngrx/store';

export const selectPark = createAction(
  '[Park Selection] Select Park',
  props<{ park: string }>()
);

export const setWeatherPreferences = createAction(
  '[Weather Preferences] Set Preferences',
  props<{ minTemp: number; maxTemp: number }>()
);

export const setDateRange = createAction(
  '[Planner] Set Date Range',
  props<{ startDate: Date; endDate: Date }>()
);

export const fetchWeatherForecast = createAction(
  '[Planner] Fetch Weather Forecast',
  props<{ zipCode: string }>()
);

export const fetchWeatherForecastSuccess = createAction(
  '[Planner] Fetch Weather Forecast Success',
  props<{ forecast: any[] }>()
);

export const fetchWeatherForecastFailure = createAction(
  '[Planner] Fetch Weather Forecast Failure',
  props<{ error: string }>()
);

export const generateSchedule = createAction(
  '[Planner] Generate Schedule'
);

export const generateScheduleSuccess = createAction(
  '[Planner] Generate Schedule Success',
  props<{ schedule: any[] }>()
);

export const generateScheduleFailure = createAction(
  '[Planner] Generate Schedule Failure',
  props<{ error: string }>()
);
