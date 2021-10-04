import './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import PageError from './components/PageError/PageError';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  
  return (
    <div className="App">
      <Router>
        {/* permanent navbar added for all pages */}
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/service'>
            <Services></Services>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          {/* error page handle */}
          <Route path='*'>
            <PageError></PageError>
          </Route>
        </Switch>
        {/* permanent footer added for all pages */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
