import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenFashion from './MenFashion'
import WomenFashion from './WomenFashion'
import CategorySidePanel from './CategorySidePanel'
import Decoration from './Decoration'

export class Category extends Component {
    render() {
        return (
            <Router >
            <div className="left">
                <CategorySidePanel />
            </div>
           
            <div className="right">
                <Route exact path="/category" Component={MenFashion} >        <MenFashion />      </Route>
                <Route exact path="/category/womenfashion" Component={WomenFashion} >    <WomenFashion />    </Route>
                <Route exact path="/category/decoration" Component={Decoration} > <Decoration />    </Route>
             </div>
 
         </Router>
        )
    }
}

export default Category
