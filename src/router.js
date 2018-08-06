import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Footer from "./components/footer/Footer";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          {/*<Route path="/discover" exact component={DiscoverPage} />*/}
          {/*<Route path="/order" exact component={OrderPage} />*/}
          {/*<Route path="/profile" exact component={ProfilePage} />*/}
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default RouterConfig;
