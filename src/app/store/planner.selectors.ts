import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlannerState } from './planner.reducer';

export const selectPlannerState = createFeatureSelector<PlannerState>('planner');

export const selectSelectedPark = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.selectedPark
);

export const selectWeatherPreferences = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.weatherPreferences
);

export const selectDateRange = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.dateRange
);

export const selectForecast = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.forecast
);

export const selectOptimalDates = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.optimalDates
);

export const selectSchedule = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.schedule
);

export const selectIsLoading = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.isLoading
);

export const selectError = createSelector(
  selectPlannerState,
  (state: PlannerState) => state.error
);