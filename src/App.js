import React, { Component } from 'react';
import { Router } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './styles/styles.scss'
import  Detail from './components/Detail'
import  SearchResults from './components/SearchResults'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <Switch>
               <Route exact path="/" component={SearchResults} />
                       <Route path="/detail/:id" component={Detail} />
           </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
