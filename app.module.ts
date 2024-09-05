import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner.component';
import { ParkSelectionComponent } from './components/park-selection.component';
import { WeatherPreferencesComponent } from './components/weather-preferences.component';
import { ScheduleComponent } from './components/schedule.component';
import { WeatherService } from './services/weather.service';
import { PlannerService } from './services/planner.service';
import { plannerReducer } from './store/planner.reducer';
import { PlannerEffects } from './store/planner.effects';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    ParkSelectionComponent,
    WeatherPreferencesComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ planner: plannerReducer }),
    EffectsModule.forRoot([PlannerEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [WeatherService, PlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
