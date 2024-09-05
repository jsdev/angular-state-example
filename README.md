An application that demonstrates my knowledge of NGRX use of actions and reducers.

It's a web app that will recommend park visits on optimal days based on weather.

Now, let's break down these actions:

<dl>
<dt>selectPark</dt>
<dd>Dispatched when a user selects a theme park.</dd>
<dt>setWeatherPreferences</dt>
<dd>Dispatched when a user sets their preferred temperature range.</dd>
<dt>setDateRange</dt>
<dd>Dispatched when a user selects their visit date range.</dd>
<dt>fetchWeatherForecast</dt>
<dd>Dispatched to initiate the weather forecast API call.</dd>
<dt>fetchWeatherForecastSuccess</dt>
<dd>Dispatched when the weather forecast is successfully retrieved.</dd>
<dt>fetchWeatherForecastFailure</dt>
<dd>Dispatched if there's an error fetching the weather forecast.</dd>
<dt>generateSchedule</dt>
<dd>Dispatched to initiate the schedule generation process.</dd>
<dt>generateScheduleSuccess</dt>
<dd>Dispatched when the schedule is successfully generated.</dd>
<dt>generateScheduleFailure</dt>
<dd>Dispatched if there's an error generating the schedule.</dd>
</dl
