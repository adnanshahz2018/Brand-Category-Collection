import React from 'react'
import MainGridBrand from './MainGrid'


export default function Category() {
    return (
        <div>
           <div className="left tab">
                
                <button className="tablinks" onclick="openCity(event, 'London')">London</button>
                <button className="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                <button className="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
            </div>

            <div className="right">
                
                <MainGridBrand />
            </div>

        </div>
    )
}
