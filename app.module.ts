import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ planner: plannerReducer }),
    EffectsModule.forRoot([PlannerEffects]),
    StoreDevtoolsModule.instrument(),
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [WeatherService, PlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
