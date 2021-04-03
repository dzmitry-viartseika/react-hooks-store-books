import './assets/scss/style.scss';
import routes from './routes/routers';
import { Route } from 'react-router-dom';
import React  from 'react';

function App() {

  return (
    <div className="app">
        <div className="app__container">
          {
            Object.values(routes).map(route =>
                <Route
                    exact
                    key={route.component}
                    path={route.url}
                    component={route.component}
                />
            )
          }
        </div>
    </div>
  );
}

export default App;
