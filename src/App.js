import Footer from './Footer';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './SearchPage';

const App = () => {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/search' exact>
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
};

export default App;
