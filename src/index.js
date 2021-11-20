import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutPage from './pages/About';
import ScrollToTop from './components/scrollTop';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import ToggleDarkMode from './components/darkModeToggle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/about">
          <ScrollToTop />
          <AboutPage />
        </Route>
        <Route path="/work">
          <ScrollToTop />
          <WorkPage />
        </Route>
        <Route path="/contact">
          <ScrollToTop />
          <ContactPage />
        </Route>
        <Route path="/">
          <ScrollToTop />
          <App />
        </Route>
      </Switch>
    </Router>
    <ToggleDarkMode />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
