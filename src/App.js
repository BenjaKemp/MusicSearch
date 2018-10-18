import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import 'normalize.css';
import './styles/styles.scss'
import  Detail from './containers/Detail'
import  SearchResults from './containers/SearchResults'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStepBackward, faStepForward, faUndo } from '@fortawesome/free-solid-svg-icons'

library.add(faStepBackward, faStepForward, faUndo )


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
