import React, { Component } from 'react'
import CategoryMainGrid from './CategoryMainGrid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenFashion from './MenFashion'
import WomenFashion from './WomenFashion'
import CategorySidePanel from './CategorySidePanel'

export class Category extends Component {

    

    render() {
        return (
            <Router >
            <div>
            <div className="left tab">
                <CategorySidePanel />
            </div>
           
            <div className="right">
                <Route exact path="/category/menfashion" Component={MenFashion} >        <MenFashion />      </Route>
                <Route exact path="/category/womenfashion" Component={WomenFashion} >    <WomenFashion />    </Route>
                <Route exact path="/category" Component={CategoryMainGrid} > <CategoryMainGrid />    </Route>
             </div>
 
         </div>
         </Router>
        )
    }
}

export default Category
