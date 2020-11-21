import React from 'react';
import './static/scss/app.scss';
import 'react-router-dom';
// import Contact from './components/presentation/contact';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/container/document';
import signin from './components/presentation/signin';
import Register from './components/presentation/login';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/container/contact';
import Education from './components/container/education';
import finalize from './components/container/finalize';

// import templatesPage from './components/presentation/templatesPage';


function App() {
  return (
    <div>
     <Header></Header>
     <Switch>
          <Route path="/education" component={Education}></Route>
          <Route path="/contact" component={Contacts}></Route>
          <Route path="/getting-started" component={GettingStarted}></Route>
          <Route path="/resume-templates" component={GettingStarted}></Route>
          {/* <Route path="/resume-templates" component={templatesPage}></Route> */}
          <Route path="/about-us"     component={AboutUs}></Route>
          <Route path="/login" component={signin}></Route>
          <Route path="/register" component={Register}></Route> 
          <Route path="/finalize" component={finalize}></Route>            
          <Route path="/" component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;