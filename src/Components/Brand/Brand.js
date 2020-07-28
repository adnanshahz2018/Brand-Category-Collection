import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BrandSidePanel from './BrandSidePanel'
import Elo from './Elo'
import Daraz from './Daraz'

export default function Brand() {
    return (
        <Router >
            <div className="left">
                <BrandSidePanel />
            </div>
           
            <div className="right">
                <Route exact path="/brand" Component={Daraz} >        <Daraz />      </Route>
                <Route exact path="/Elo" Component={Elo} >        <Elo />      </Route>
             </div>
 
         </Router>

    )
}

