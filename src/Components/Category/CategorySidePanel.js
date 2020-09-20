import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles.css'

export default function CategorySidePanel() {
    return (
            <table className="productlinks">
                <Link className="link panel" to='/category'> 
                    <tr className="panel_links" >
                        Men     
                    </tr>
                </Link> 
                <Link className="link panel"  to='/category/womenfashion'>
                    <tr className="panel_links" >
                        Women     
                    </tr>
                </Link>
                <Link className="link panel" to='/category/decoration' >  
                    <tr className="panel_links" >
                        Decor   
                    </tr>
                </Link>
               </table>
    )
}
