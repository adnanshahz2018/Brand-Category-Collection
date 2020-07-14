
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Mynav from './NavBar/Mynav';
import Home from './Components/Home';
import Brand from './Components/Brand'
import Category from './Components/Category'
import About from './Components/About';
import MainGridBrand from './Components/MainGrid'

export class App extends Component {
  render() {
    return (
     <Router>      
       <div>
          <Mynav />
          <Route exact path="/" Component={Home} > <Home /> </Route>
          <Route exact path="/" Component={MainGridBrand} > <MainGridBrand /> </Route>
          <Route exact path="/brand" Component={Brand} > <Brand /> </Route>
          <Route exact path="/category" Component={Category} > <Category /> </Route>
          <Route exact path="/about" Component={About} > <About /> </Route>
        
      </div>
      </Router>

    )
  }
}

export default App
