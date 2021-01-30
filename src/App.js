import Footer from './Footer';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import SearchPage from './SearchPage';

const App = () => {
  return (
    <div className='app'>
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
    </div>
  );
};

export default App;
