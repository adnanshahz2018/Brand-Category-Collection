import React from 'react'
import {Link} from 'react-router-dom'
import './brandgridstyles.css'

export default function BrandSidePanel() {
    return (
        <div>
            <Link className="link" to='/brand'>  
                <div className="panel-brand-logo daraz">
                    <img src="https://image3.mouthshut.com/images/imagesp/925917207s.jpg" alt="Daraz" />
                </div>
            </Link>
            <Link className="link" to='/Elo'>  
            <div className="panel-brand-logo elo">
                <img src="https://i.pinimg.com/originals/61/e1/e9/61e1e92d1cba837bba6f64f1a03a9b8e.png" alt="ExportLeftOver" />
            </div>
            </Link>

            
        </div>
    )
}
