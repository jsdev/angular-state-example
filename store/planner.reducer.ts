import { createReducer, on } from '@ngrx/store';
import * as PlannerActions from './planner.actions';

export interface PlannerState {
  selectedPark: string;
  weatherPreferences: { minTemp: number; maxTemp: number };
  dateRange: { startDate: Date; endDate: Date };
  forecast: any[];
  optimalDates: Date[];
  schedule: any[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: PlannerState = {
  selectedPark: '',
  weatherPreferences: { minTemp: 20, maxTemp: 28 },
  dateRange: { startDate: new Date(), endDate: new Date() },
  forecast: [],
  optimalDates: [],
  schedule: [],
  isLoading: false,
  error: null
};

export const plannerReducer = createReducer(
  initialState,
  on(PlannerActions.selectPark, (state, { park }) => ({ ...state, selectedPark: park })),
  on(PlannerActions.setWeatherPreferences, (state, { minTemp, maxTemp }) => 
    ({ ...state, weatherPreferences: { minTemp, maxTemp } })),
  on(PlannerActions.setDateRange, (state, { startDate, endDate }) => 
    ({ ...state, dateRange: { startDate, endDate } })),
  on(PlannerActions.fetchWeatherForecast, state => ({ ...state, isLoading: true })),
  on(PlannerActions.fetchWeatherForecastSuccess, (state, { forecast }) => ({ 
    ...state, 
    forecast, 
    isLoading: false,
    optimalDates: forecast.filter((day: any) => 
      day.temperature >= state.weatherPreferences.minTemp && 
      day.temperature <= state.weatherPreferences.maxTemp
    ).map((day: any) => new Date(day.date))
  })),
  on(PlannerActions.fetchWeatherForecastFailure, (state, { error }) => 
    ({ ...state, error, isLoading: false })),
  on(PlannerActions.generateScheduleSuccess, (state, { schedule }) => ({ ...state, schedule }))
);
