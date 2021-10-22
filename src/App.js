import React from 'react';
import './App.css';

import { NavLink, Switch, Route } from 'react-router-dom';

/* 
  setting up the app like this is similar to having a base.html for your react views 
*/
const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);

/* 
  to have the links work we use <NavLink> instead of <a> similarly,
  within the navlink tag we use to="" instead of href=""
  for more complex navbars, this should be set up as a class in another
  file and imported to this one
  NOTE: outside of the navbar we should use <Link>
  NOTE: activeClassName defaults to "active" which you can style in CSS
        if that name is suitable
*/
const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to="/">Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to="/about">About</NavLink></li>
      <li><NavLink exact activeClassName="current" to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

/* 
  here is where the "views" are set up. In a real project these should be
  on a seperate file and imported into this one.
*/
const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p>Feel free to browse around and learn more about me.</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

/* 
  The following works similar to urls.py from django 
*/
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

export default App;
