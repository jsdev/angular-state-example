An application that demonstrates my knowledge of NGRX use of actions and reducers.

It's a web app that will recommend park visits on optimal days based on weather.

Now, let's break down these actions:

;selectPark
:Dispatched when a user selects a theme park.
;setWeatherPreferences
:Dispatched when a user sets their preferred temperature range.
;setDateRange
:Dispatched when a user selects their visit date range.
;fetchWeatherForecast
:Dispatched to initiate the weather forecast API call.
;fetchWeatherForecastSuccess
:Dispatched when the weather forecast is successfully retrieved.
;fetchWeatherForecastFailure
:Dispatched if there's an error fetching the weather forecast.
;generateSchedule
:Dispatched to initiate the schedule generation process.
;generateScheduleSuccess
:Dispatched when the schedule is successfully generated.
;generateScheduleFailure
:Dispatched if there's an error generating the schedule.
