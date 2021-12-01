import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageWraper from './components/containers/PageWraper';
import CitiesWeather from './components/containers/CitiesWeather';
import WeatherDetailsView from './components/WeatherDetailsView';

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading</h3>}>
        <Switch>
          <Route path="/" exact>
            <PageWraper title="List of added cities">
              <CitiesWeather />
            </PageWraper>
          </Route>
          <Route path="/details/:cityName">
            <PageWraper title="Detailed information about the weather in the city">
              <WeatherDetailsView />
            </PageWraper>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
